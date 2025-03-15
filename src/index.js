import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppWithProvider from './App';
import reportWebVitals from './reportWebVitals';

// Adding Google Fonts links
const fontLinks = document.createElement('link');
fontLinks.rel = 'stylesheet';
fontLinks.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap';
document.head.appendChild(fontLinks);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWithProvider />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
