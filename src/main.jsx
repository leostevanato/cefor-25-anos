import React from 'react';
import ReactDOM from 'react-dom/client';
import './js/main.js';
import LinhaDoTempo2 from './LinhaDoTempo2';
import Depoimentos from './Depoimentos';
import CeforEmNumeros from './CeforEmNumeros';

ReactDOM.createRoot(document.getElementById('depoimentos-cefor')).render(
  <React.StrictMode>
    <Depoimentos />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('timeline-cefor')).render(
  <React.StrictMode>
    <LinhaDoTempo2 />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('cefor-em-numeros-carousel')).render(
  <CeforEmNumeros />
);