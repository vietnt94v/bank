import type { ErrorInfo, ReactNode } from 'react';
import { Component } from 'react';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  message: string;
};

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public state: ErrorBoundaryState = {
    hasError: false,
    message: '',
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      message: error.message || 'Something went wrong.',
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
  }

  private handleReset = () => {
    this.setState({
      hasError: false,
      message: '',
    });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-12 text-white">
          <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-xl shadow-slate-950/30 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Error Boundary
            </p>
            <h1 className="mt-3 text-3xl font-semibold">
              The UI hit an error.
            </h1>
            <p className="mt-3 text-sm text-slate-300">{this.state.message}</p>
            <button
              type="button"
              onClick={this.handleReset}
              className="mt-6 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
