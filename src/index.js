/**
 * ============================================
 * REACT ENTRY POINT
 * ============================================
 * 
 * This file bootstraps the React application.
 * It mounts the App component to the DOM.
 * 
 * ============================================
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

// Use hydrate if pre-rendered by react-snap, otherwise render normally
if (rootElement.hasChildNodes()) {
  // Hydrate pre-rendered content
  ReactDOM.hydrateRoot(
    rootElement,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // Normal render for development
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
