import React from 'react'
import { createRoot } from 'react-dom/client';

import Inicio from './components/inicio'

import './stylesheets/index.scss'

const link = document.createElement('link');
link.rel = 'icon';
link.href = '/favicon.ico';
document.head.appendChild(link);

document.body.innerHTML = '<div id="root"></div>';
const root = createRoot(document.getElementById('root'));
root.render(<Inicio />);
