import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import LinhaDoTempo from './LinhaDoTempo';
import './js/main.js';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById('timeline-cefor')).render(
  <React.StrictMode>
    <LinhaDoTempo />
  </React.StrictMode>
);