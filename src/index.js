import { createRoot } from 'react-dom/client';
import app from './App';

document.body.innerHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById('app'));
root.render(app());
