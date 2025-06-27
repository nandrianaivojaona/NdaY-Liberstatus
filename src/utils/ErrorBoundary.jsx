import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
    return (
      <div>
        <h1>Misy fahadisoana mila jerena.</h1>
        <p>{this.state.error?.toString()}</p>
        <p>Pejy: {window.location.pathname}</p>
        <p>Loharano: {this.state.error?.stack?.split('\n')[1]?.trim()}</p>
      </div>
    );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;