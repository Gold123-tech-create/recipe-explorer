import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <section>
          <h2>Something went wrong.</h2>
          <p>We couldn't display this part of the application.</p>
          <button onClick={() => window.location.reload()}>
            Try Again
          </button>
        </section>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary