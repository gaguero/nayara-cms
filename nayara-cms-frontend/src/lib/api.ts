import axios, { InternalAxiosRequestConfig, AxiosError } from 'axios';
import { toast } from 'sonner'; // Import toast

// --- Token Storage Helpers ---
const AUTH_TOKEN_KEY = 'authToken';
// Add REFRESH_TOKEN_KEY if implementing refresh logic

export const tokenStorage = {
  getToken: (): string | null => localStorage.getItem(AUTH_TOKEN_KEY),
  setToken: (token: string): void => localStorage.setItem(AUTH_TOKEN_KEY, token),
  removeToken: (): void => localStorage.removeItem(AUTH_TOKEN_KEY),
  // Add getRefreshToken, setRefreshToken, removeRefreshToken if needed
};

// --- Axios Instance Setup ---
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1'; // Use Vite env var

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// --- Request Interceptor ---
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = tokenStorage.getToken();
    if (token) {
      // Ensure headers object exists before assigning to it
      config.headers = config.headers ?? {}; // Use nullish coalescing
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    console.error('Request Error Interceptor:', error);
    return Promise.reject(error);
  },
);

// --- Response Interceptor ---
// Basic 401 handling: remove token and redirect (can be enhanced later)
apiClient.interceptors.response.use(
  (response) => response, // Pass through successful responses
  (error: AxiosError) => {
    console.error('Response Error Interceptor:', error.response?.status, error.message);
    
    const status = error.response?.status;
    const errorData = error.response?.data as { message?: string | string[] }; // Type assertion for message

    if (status === 401) {
      console.log('Unauthorized (401). Removing token and redirecting to login.');
      tokenStorage.removeToken();
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    } else {
        // Show generic toast for other errors (e.g., 500, network errors)
        // Specific onError handlers in hooks can override this if needed
        let errorMessage = "An unexpected error occurred. Please try again.";
        if (error.code === 'ERR_NETWORK') {
            errorMessage = "Network error. Please check your connection.";
        } else if (errorData?.message) {
            // Use backend message if available (handle array case)
            errorMessage = Array.isArray(errorData.message) 
                            ? errorData.message.join(', ') 
                            : errorData.message;
        } else if (error.message) {
            errorMessage = error.message; // Fallback to Axios error message
        }
        
        // Avoid showing toast for specific handled cases if needed later
        // Example: if (status !== 400) { ... }
        toast.error("Request Failed", { description: errorMessage });
    }

    // TODO: Implement token refresh logic here if needed
    return Promise.reject(error); // IMPORTANT: Always re-reject the error
  },
);

// Optional: Export helper functions for common API operations
// export const api = {
//   get: <T>(url: string, config = {}) => apiClient.get<T>(url, config),
//   post: <T>(url: string, data = {}, config = {}) => apiClient.post<T>(url, data, config),
//   put: <T>(url: string, data = {}, config = {}) => apiClient.put<T>(url, data, config),
//   delete: <T>(url: string, config = {}) => apiClient.delete<T>(url, config),
// }; 