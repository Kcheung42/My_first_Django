import React from 'react';
import { render } from 'react-dom';
import { Browser } from './components/browser';

render(<Browser url='./api'/>, document.getElementById('container'))
