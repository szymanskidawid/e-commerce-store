import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/header-section/Header.css';
import './styles/header-section/Logo.css';
import './styles/header-section/NavButton.css';
import './styles/header-section/CheckoutButton.css';
import './styles/header-section/LightDarkButton.css';
import './styles/main-section/ProductGrid.css';
import './styles/main-section/ProductCard.css';
import './styles/main-section/ProductButton.css';
import './styles/basket-section/BasketGrid.css';
import './styles/basket-section/BasketProduct.css';
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
