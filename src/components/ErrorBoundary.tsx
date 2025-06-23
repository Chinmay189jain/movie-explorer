import { Component, ReactNode } from "react";

interface Props {
    children: ReactNode
}

interface State {
    hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: any) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Something went wrong. Please try again later.</h2>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;