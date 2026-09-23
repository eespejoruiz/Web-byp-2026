import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/fixes.css';
import './assets/css/byp.css';
import reportWebVitals from './reportWebVitals';
import { iniciarMedicion } from './utils/medicion';

// Contactos (WhatsApp, telefono, correo) como generate_lead en GA4.
iniciarMedicion();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
