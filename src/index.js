import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/Header.css';
import './styles/Logo.css';
import './styles/NavButton.css';
import './styles/CheckoutButton.css';
import './styles/LightDarkButton.css';
import './styles/ProductGrid.css';
import './styles/ProductCard.css';
import './styles/ProductButton.css';
import './styles/BasketGrid.css';
import './styles/Footer.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
