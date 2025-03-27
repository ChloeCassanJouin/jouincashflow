import React from 'react';
import ReactDOM from 'react-dom/client'; // Utilise le module `react-dom/client` pour React 18+
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Crée un root à l'élément 'root'
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);