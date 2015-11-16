/* ---------------------------------------------------------------------------*/

require('client/public/css/style.css');

import React from 'react';
import ReactDOM from 'react-dom';

/* ---------------------------------------------------------------------------*/

 var ListItem = React.createClass({
  render: function() {
    return (
      <li className={this.props.style + '-item'}>
        <a className={this.props.style + '-item-link'} href={this.props.item.url}>
        {this.props.item.label}
        </a>
        .
      </li>
    );
  }
 });

var ListContainer = React.createClass({
  render: function() {
    const {config, items} = this.props;

    return (
      <div className={config.style}>
        <h1 className={config.style + '-main-title'}>{config.title}</h1>
        <ul className={config.style + '-unordered-list'}>

          {items.map(function(item, i) {
            // We should use item.id as key.
            return <ListItem {...config} key={i} item={item} />;
          })}

        </ul>
      </div>
    );
  }
});

/* ---------------------------------------------------------------------------*/

const config = {
  style: 'custom',
  title: 'React Immutable Properties',
}

const items = [
  {
    label : 'JSX Looks Like An Abomination but it’s Good for You',
    url : 'https://medium.com/javascript-scene/jsx-looks-like-an-abomination-1c1ec351a918#.710897lse',
  },
  {
    label : 'Default Prop Values',
    url : 'https://facebook.github.io/react/docs/reusable-components.html#default-prop-values',
  },
  {
    label : 'Transferring Props',
    url : 'https://facebook.github.io/react/docs/transferring-props.html',
  },
  {
    label : 'Type of the Children Props',
    url : 'https://facebook.github.io/react/tips/children-props-type.html',
  },
  {
    label : 'Props in getInitialState Is an Anti-Pattern',
    url : 'https://facebook.github.io/react/tips/props-in-getInitialState-as-anti-pattern.html',
  },
];

/**
 * 	Most of the time we should explicitly pass the properties down. This ensures
 *  that we only expose a subset of the inner API, one that we know will work.
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
