/* ---------------------------------------------------------------------------*/

require('client/public/css/style.css');

import React from 'react';
import ReactDOM from 'react-dom';

/* ---------------------------------------------------------------------------*/

/**
 * React already has built-in factories for common HTML tags.
 *
 *	- React.DOM provides convenience wrappers around React.createElement
 *		for DOM components.
 *
 *	- These should only be used when not using JSX.
 *
 *	- For example: React.DOM.div(null, 'Hello World!')
 */
let TagsFactory = React.createClass({
  render: function() {
    const data = {
      className: 'new',
      title: 'Top Level API',
      url: 'https://facebook.github.io/react/docs/top-level-api.html',
      img: require('client/public/img/react-logo.png'),
    }

    return (
      React.DOM.div({ className: data.className }, // Attributes.
        React.DOM.h1(
          { className: data.className + '-title' }, // Attributes.
          data.title
        ),
        React.DOM.p(
          { className: data.className + '-paragraph' }, // Attributes.
          React.DOM.a(
            { className: data.className + '-anchor', href: data.url }, // Attributes.
            React.DOM.img(
              { className: data.className + '-img', src: data.img, width: '280px' }, // Attributes.
            )
          )
        )
      )
    );
  }
});

/* ---------------------------------------------------------------------------*/

ReactDOM.render(
  // Use upper case convention for Component Classes.
  <TagsFactory />,
  document.getElementById('tags-factory')
);

/* ---------------------------------------------------------------------------*/
