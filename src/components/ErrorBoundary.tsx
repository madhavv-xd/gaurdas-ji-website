import { Component, type ReactNode } from 'react';

// Shows a way back instead of a blank page if a page throws while rendering
export default class ErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    console.error(error);
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <section className="py-32 px-[22px] text-center">
        <p className="eyebrow">Something went wrong</p>
        <h1 className="text-[clamp(2rem,4vw,3rem)] text-ink-800 mt-2 mb-4">This page couldn’t load</h1>
        <p className="text-ink-400 mb-8">Reload to try again, or go back to the home page.</p>
        <div className="flex justify-center gap-3 flex-wrap">
          <button onClick={() => window.location.reload()} className="btn-saffron">Reload page</button>
          <a href="/" className="btn-outline">Back to Home</a>
        </div>
      </section>
    );
  }
}
