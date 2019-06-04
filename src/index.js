import React from 'react';
import { render } from 'react-dom';

import Badges from './components/Badge'
import './global.css'
import 'bootstrap/dist/css/bootstrap.css'

const container = document.getElementById('app');
render(<Badges/>, container);
