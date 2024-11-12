// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './Pages/index.css'; 
import App from './App'; 
import reportWebVitals from './Pages/reportWebVitals';
import { CartProvider } from './Components/Cartcontext/Cartcontext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider> 
      <App />
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
