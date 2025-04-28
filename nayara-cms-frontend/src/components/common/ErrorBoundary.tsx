import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service here
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleReload = () => {
      window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-background">
          <h1 className="text-2xl font-bold text-destructive mb-4">Oops! Something went wrong.</h1>
          <p className="text-muted-foreground mb-6">
            An unexpected error occurred. Please try reloading the page.
          </p>
          {/* Optional: Display error details in development */} 
          {import.meta.env.DEV && this.state.error && (
            <details className="mb-6 p-4 border rounded bg-muted text-left text-xs w-full max-w-2xl overflow-auto">
              <summary>Error Details</summary>
              <pre className="mt-2 whitespace-pre-wrap">
                {this.state.error.stack || this.state.error.message}
              </pre>
            </details>
          )}
          <Button onClick={this.handleReload}>Reload Page</Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 