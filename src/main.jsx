import React from 'react';
import ReactDOM from 'react-dom/client';
import './js/main.js';
import LinhaDoTempo from './LinhaDoTempo';
import Depoimentos from './Depoimentos';

ReactDOM.createRoot(document.getElementById('depoimentos-cefor')).render(
  <React.StrictMode>
    <Depoimentos />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('timeline-cefor')).render(
  <React.StrictMode>
    <LinhaDoTempo />
  </React.StrictMode>
);