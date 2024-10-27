import React from 'react'
import { createRoot } from 'react-dom/client';

import Inicio from './components/inicio'

import './stylesheets/index.scss'

document.body.innerHTML = '<div id="root"></div>';
const root = createRoot(document.getElementById('root'));
root.render(<Inicio />);
