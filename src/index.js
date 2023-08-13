import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/Header.css';
import './styles/NavButton.css';
import './styles/CheckoutButton.css';
import './styles/ProductGrid.css';
import './styles/ProductCard.css';
import './styles/Footer.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
