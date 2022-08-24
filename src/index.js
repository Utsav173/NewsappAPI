import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Conetext from './Conetext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Conetext>  
    <App />
    </Conetext>
  </React.StrictMode>
);

reportWebVitals();
