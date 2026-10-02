import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/fixes.css';
import './assets/css/byp.css';
import reportWebVitals from './reportWebVitals';
import { iniciarMedicion } from './utils/medicion';

// Contactos (WhatsApp, telefono, correo) como generate_lead en GA4.
iniciarMedicion();

const contenedor = document.getElementById('root');
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Cada página llega ya escrita en el HTML (prerender.mjs marca el contenedor
// con data-prerendered). hydrateRoot se engancha a ese HTML en vez de borrarlo
// y volver a pintarlo: con createRoot el texto principal se pintaba dos veces y
// en móvil la página tardaba unos 3 segundos más en verse terminada (LCP).
// Si React encuentra una diferencia, él mismo vuelve a pintar desde cero, que
// es exactamente lo que hacía antes.
if (contenedor.hasAttribute('data-prerendered')) {
  ReactDOM.hydrateRoot(contenedor, app);
} else {
  ReactDOM.createRoot(contenedor).render(app);
}
reportWebVitals();
