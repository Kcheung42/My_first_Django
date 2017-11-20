import React from 'react';
import ReactDOM from 'react-dom';
import { ItemLister } from './components/ItemLister';

ReactDOM.render(<ItemLister  url='./api'/>, document.getElementById('container'))
