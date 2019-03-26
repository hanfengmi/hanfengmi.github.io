import React, { Component, lazy, Suspense } from 'react';

export default function lazyLoader(importComponent) {

  class AsyncComponent extends Component {
    render() {
      const Component = lazy(importComponent)

      return (
        <Suspense fallback={<h1>Still Loading…</h1>}>
            <Component />
        </Suspense>
      )
    }
  }

  return AsyncComponent;
  
};