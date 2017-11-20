import React from 'react';
import { render } from 'react-dom';
import { TemplateClass } from './components/template';
// import ReactDOM from 'react-dom';
// import { ItemLister } from './components/ItemLister';

ReactDOM.render(<ItemLister url='/listing/api'/>, document.getElementById('react-root'))
// render(<TemplateClass />, window.document.getElementById('react-root'))
