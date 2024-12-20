import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Solo importa App, donde están las rutas
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* App ya maneja el enrutamiento */}
  </React.StrictMode>
);

// Si deseas medir el rendimiento de tu aplicación, pasa una función
// para registrar los resultados (por ejemplo: reportWebVitals(console.log))
// o envíalos a un endpoint de análisis. Aprende más en: https://bit.ly/CRA-vitals
reportWebVitals();
