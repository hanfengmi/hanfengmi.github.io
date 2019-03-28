import React, { Component, lazy, Suspense } from 'react';

export default function lazyLoader(importComponent) {

  class AsyncComponent extends Component {
    render() {
      const Component = lazy(importComponent)

      return (
        <Suspense fallback={<div style={{width:'100%',height:'100vh',background:'#181818'}}></div>}>
            <Component />
        </Suspense>
      )
    }
  }

  return AsyncComponent;
  
};