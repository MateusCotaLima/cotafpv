import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';

import ContactMe from './components/ContactMe';
import Sobre from './components/Sobre';
import SobreFpv from './components/SobreFpv';
import Areas from './components/Areas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <SobreFpv/>
    <Sobre/>
    <Areas/>
  </React.StrictMode>
);
