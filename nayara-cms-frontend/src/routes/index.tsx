import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
  Outlet, // Import Outlet if used in placeholders
} from "react-router-dom";

// Import Pages
import { LoginPage } from "../features/auth/pages/LoginPage";
import { AuthCallbackPage } from "../features/auth/pages/AuthCallbackPage";
// Import Layouts
import { RootLayout } from "../components/layouts/RootLayout";
import { ProtectedRoute } from "../components/auth/ProtectedRoute";
import { AppLayout } from "../components/layouts/AppLayout"; // Import the real AppLayout

// Placeholder for Dashboard Page
const DashboardPage = () => <div>Dashboard Page Placeholder</div>;

const routes: RouteObject[] = [
  {
    // Root layout wraps everything, including public routes
    element: <RootLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/auth/callback",
        element: <AuthCallbackPage />,
      },
      {
        // Protected routes wrapped by ProtectedRoute logic
        element: <ProtectedRoute />,
        children: [
          {
            // AppLayout wraps all authenticated pages
            path: "/",
            element: <AppLayout />, // Use the real AppLayout
            children: [
              // Define protected child routes here
              { index: true, element: <DashboardPage /> }, // / renders Dashboard
              // Example:
              { path: "content", element: <div>Content Management Placeholder</div> },
              { path: "planning-library", element: <div>Planning Library Placeholder</div> },
              { path: "media-library", element: <div>Media Library Placeholder</div> },
            ],
          },
        ],
      },
      // TODO: Add a 404 Not Found route here, potentially within RootLayout
      // { path: "*", element: <NotFoundPage /> }
    ],
  },
];

const router = createBrowserRouter(routes);

export function AppRouter() {
  return <RouterProvider router={router} />;
} 