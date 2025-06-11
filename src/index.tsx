import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {YMInitializer} from "@appigram/react-yandex-metrika";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <YMInitializer accounts={[96545029]}/>
    <App />
  </React.StrictMode>
);
