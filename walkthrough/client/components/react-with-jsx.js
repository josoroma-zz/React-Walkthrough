/* ---------------------------------------------------------------------------*/

require('client/public/css/style.css');

import React from 'react';
import ReactDOM from 'react-dom';

/* ---------------------------------------------------------------------------*/

/**
 * React JSX transforms from an XML-like syntax into native JavaScript. XML
 * elements, attributes and children are transformed into arguments that are
 * passed to `React.createElement()``.
 *
 * Think of them as shorthand for calling `React.createElement()`.
 *
 * Remember: We don't need JSX to use React.
 */
var WithJSX = React.createClass({
  render: function() {
    return (
      <div>
        {/* A JSX comment - Move this line up */}
        <h1>Javascript XML Syntax Transform</h1>
        <ul>
          <li>
            <a href="https://facebook.github.io/jsx">
              JSX is a JavaScript syntax extension that looks similar to XML.
            </a>
          </li>
          <li>
            <a href="https://facebook.github.io/react/docs/tutorial.html#jsx-syntax">
              A precompiler that translates the syntactic sugar to plain JavaScript.
            </a>
          </li>
        </ul>
      </div>
    );
  }
});

ReactDOM.render(
  // Remenber: Use upper case convention for Component Classes.
  <WithJSX />,
  document.getElementById('with-jsx')
);

/* ---------------------------------------------------------------------------*/

var WithAdvancedJSX = React.createClass({
  render: function() {
    const data = {
      style: 'custom-',
      title: 'JSX expressions evaluate to React Elements',
      urls: [
        'https://facebook.github.io/react/docs/getting-started.html#separate-file',
        'http://facebook.github.io/react/docs/jsx-in-depth.html',
      ],
    }

    return (
      <div className={data.style + 'div'}>
        {/*
          Another JSX comment.
        */}
        <h2 className={data.style + 'h2'}>{data.title}</h2>
        <ul className={data.style + 'ul'}>
          <li className={data.style + 'li'}><a href={data.urls[0]}>Our React JSX code can live in a separate file.</a></li>
          <li className={data.style + 'li'}><a href={data.urls[1]}>Use JSX to express UI components.</a></li>
        </ul>
        <p className={data.style + 'p'}>
          {'JSX is a XML-like syntax extension to ECMAScript'} without any defined semantics.
        </p>
      </div>
    );
  }
});

ReactDOM.render(
  // Remenber: Use upper case convention for Component Classes.
  <WithAdvancedJSX />,
  document.getElementById('with-advanced-jsx')
);

/* ---------------------------------------------------------------------------*/
