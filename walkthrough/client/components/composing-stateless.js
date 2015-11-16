/* ---------------------------------------------------------------------------*/

require('client/public/css/style.css');

import React from 'react';
import ReactDOM from 'react-dom';

/* ---------------------------------------------------------------------------*/

const ListItem = ({style, item}) => (
  <li className={style + '-item'}>
    <a className={style + '-item-link'} href={item.url}>
      {item.label}
    </a>
    .
  </li>
);

// ListItem.propTypes = {};

/**
 * Functional components do not have lifecycle methods, but we can set
 * .propTypes and .defaultProps as properties on the function.
 */
const ListContainer = ({config, items}) => (
 <div className={config.style}>
   <h1 className={config.style + '-main-title'}>{config.title}</h1>
   <ul className={config.style + '-unordered-list'}>
     {/* http://toddmotto.com/es6-arrow-functions-syntaxes-and-lexical-scoping */}
     {items.map((item, i) => <ListItem style={config.style} key={i} item={item} />)}
   </ul>
 </div>
);

// ListContainer.propTypes = {};

/* ---------------------------------------------------------------------------*/

const config = {
  style: 'custom',
  title: 'Composing Stateless Components',
}

const items = [
  {
    label : 'Destructuring and an implicit return',
    url : 'https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components',
  },
  {
    label : 'Functional Stateless Components',
    url : 'https://medium.com/@joshblack/stateless-components-in-react-0-14-f9798f8b992d#.cuk9bpn8j',
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
