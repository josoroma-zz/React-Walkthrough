/* -------------------------------------------------------------------------- */

require('client/public/css/style.css');

import React from 'react';
import ReactDOM from 'react-dom';

/* -------------------------------------------------------------------------- */

/**
 * Its state doesn't need to be preserved.
 */
const MyButton = ({ exposeClick }) => {

  return <input className="checkbox" onClick={exposeClick} type="checkbox" />;

}

/* -------------------------------------------------------------------------- */

class MyForm extends React.Component {

  handleCheckBoxClick = (e) => {
    console.log(e.target.checked);
  }

  render() {
    return <MyButton exposeClick={this.handleCheckBoxClick} />;
  }

}

/* -------------------------------------------------------------------------- */

ReactDOM.render(
  <MyForm />,
  document.getElementById('pure-render')
);

/* -------------------------------------------------------------------------- */
