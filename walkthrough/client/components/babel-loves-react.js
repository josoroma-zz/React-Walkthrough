/* ---------------------------------------------------------------------------*/

require('client/public/css/style.css');

import React from 'react';
import ReactDOM from 'react-dom';

/* ---------------------------------------------------------------------------*/

/**
 * Constant Elements:
 *
 * 	ReactElements and their props objects can be treated as value types.
 * 	Any instance is conceptually equivalent if all their values are the same.
 */

const transformElement = <my-element id="element-wrapper" />;

ReactDOM.render(
  // Use lower case convention for HTML custom element tags.
  transformElement,
  document.getElementById('babel-element')
);

/* ---------------------------------------------------------------------------*/

let groupURL = 'http://babeljs.io/';
let groupIMG = require('client/public/img/babel-loves-react.png');

let block = (
  <div>
    <h1>Babel Loves JSX and React</h1>
      <p>
        <a href={groupURL}><img src={groupIMG} width="280px" height="86px" /></a>
      </p>
  </div>
);

ReactDOM.render(
  // Use lower case convention for HTML.
  block,
  document.getElementById('babel-block')
);

/* ---------------------------------------------------------------------------*/
