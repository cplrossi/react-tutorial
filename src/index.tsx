import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

document.body.innerHTML = '<div id="app"></div>';

const elem = document.getElementById('app');

if (elem) {
  const root = createRoot(elem);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  const msg = 'app init failed';
  const para = document.createElement('p');
  para.textContent = msg;

  console.log(msg);
  document.body.appendChild(para);
}
