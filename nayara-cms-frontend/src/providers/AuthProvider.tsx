import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
  useMemo,
} from 'react';
import { apiClient, tokenStorage } from '../lib/api';

// --- Interfaces ---
interface AuthUser {
  id: number;
  email: string;
  // Add other relevant user fields from your backend payload (e.g., name, role)
}

interface AuthContextType {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => void;
  checkAuthStatus: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

// --- Context Creation ---
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// --- Auth Provider Component ---
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(tokenStorage.getToken());
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // --- Authentication Functions ---

  const checkAuthStatus = useCallback(async () => {
    console.log('Checking auth status...');
    setIsLoading(true);
    const currentToken = tokenStorage.getToken();
    if (!currentToken) {
      console.log('No token found.');
      setUser(null);
      setToken(null);
      setIsAuthenticated(false);
      setIsLoading(false);
      return;
    }

    try {
      // Assume /auth/status endpoint returns the user object on success
      console.log('Validating token with /auth/status...');
      const response = await apiClient.get<{ user: AuthUser }>('/auth/status');
      const fetchedUser = response.data.user;
      console.log('Token valid, user found:', fetchedUser);
      setUser(fetchedUser);
      setToken(currentToken); // Ensure token state matches storage
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Token validation failed:', error);
      tokenStorage.removeToken();
      setUser(null);
      setToken(null);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
      console.log('Auth status check finished.');
    }
  }, []);

  const login = useCallback(
    async (credentials: { email: string; password: string }) => {
      setIsLoading(true);
      try {
        // Assume /auth/login endpoint returns { accessToken: string }
        const response = await apiClient.post<{ accessToken: string }>(
          '/auth/login',
          credentials,
        );
        const newAccessToken = response.data.accessToken;

        tokenStorage.setToken(newAccessToken);
        setToken(newAccessToken);

        // After setting token, immediately check status to fetch user info
        await checkAuthStatus(); // This will set user, isAuthenticated, and isLoading
      } catch (error) {
        console.error('Login failed:', error);
        tokenStorage.removeToken();
        setUser(null);
        setToken(null);
        setIsAuthenticated(false);
        setIsLoading(false); // Ensure loading is false on login failure
        throw error; // Re-throw error to be handled by the caller (e.g., login form)
      }
    },
    [checkAuthStatus], // Include checkAuthStatus as dependency
  );

  const logout = useCallback(() => {
    // TODO: Call backend /auth/logout endpoint if it exists
    console.log('Logging out...');
    tokenStorage.removeToken();
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
    // Optionally redirect here or let components handle redirect
    // window.location.href = '/login';
  }, []);

  // --- Initial Auth Check on Mount ---
  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  // --- Context Value ---
  // Use useMemo to prevent unnecessary re-renders of consumers
  const value = useMemo(
    () => ({
      user,
      token,
      isAuthenticated,
      isLoading,
      login,
      logout,
      checkAuthStatus,
    }),
    [user, token, isAuthenticated, isLoading, login, logout, checkAuthStatus],
  );

  // --- Render Provider ---
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// --- Custom Hook ---
// Moved to useAuth.ts (Subtask 6.3)

export default AuthContext; // Export context directly if needed elsewhere 