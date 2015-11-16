/* ---------------------------------------------------------------------------*/

require('client/public/css/style.css');

import React from 'react';
import ReactDOM from 'react-dom';

import {ListContainer} from 'client/components/reuse/list-container';

/* ---------------------------------------------------------------------------*/

const config = {
  style: 'custom',
  title: 'Export and Reuse ES6 Modules',
}

const items = [
  {
    label : 'Babel JS Modules',
    url : 'https://babeljs.io/docs/learn-es2015/#modules',
  },
  {
    label : 'Writing client-side ES6 with webpack',
    url : 'http://www.2ality.com/2015/04/webpack-es6.html',
  },
  {
    label : 'Babel JS Modules Plugins',
    url : 'http://babeljs.io/docs/plugins/#modules',
  },
  {
    label : 'Node Modules',
    url : 'https://nodejs.org/docs/latest/api/modules.html',
  },
  {
    label : 'Writing Modular JavaScript',
    url : 'http://addyosmani.com/writing-modular-js',
  },
  {
    label : 'Module Pattern',
    url : 'http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript',
  },
  {
    label : 'CommonJS Modules',
    url : 'http://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailcommonjs',
  }
];

/**
 * 	State should contain data that a component's event handlers may change to
 * 	trigger a UI update.
 */
ReactDOM.render(
  // Remenber: Use upper case convention for Component Classes.
  <ListContainer
    // Properties.
    config={config}
    items={items}
  />,
  document.getElementById('list-container')
);

/* ---------------------------------------------------------------------------*/
