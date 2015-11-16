/* ---------------------------------------------------------------------------*/

require('client/public/css/style.css');

import React from 'react';
import ReactDOM from 'react-dom';

/* ---------------------------------------------------------------------------*/

var MyComponent = React.createClass({
  getInitialState: function() {
    return {myClassName: 'square'};
  },

  handleClick: function() {
    // Previously: var input = this.refs.myShape.getDOMNode();
    console.log(this.myShape);

    var backgroundColor = this.myShape.style.background == 'blue' ? 'red' : 'blue';
    var shape = this.myShape.className == 'rectangle' ? 'square' : 'rectangle';


    // Useful when we need to find the DOM markup rendered by a component.
    this.myShape.style.background = backgroundColor;

    this.myShape.className = shape;
    // this.setState({myClassName: shape});
  },

  render: function() {
    console.log('Re-rendering');
    // The ref attribute adds a reference to the component to
    // this.refs when the component is mounted.
    return (
      <div>
        {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions */}
        <div className={this.state.myClassName} ref={(ref) => this.myShape = ref}></div>

        <input
          className="button"
          type="button"
          value="Don't Click Me"
          onClick={this.handleClick}
        />
      </div>
    );
  }
});

ReactDOM.render(
  <MyComponent />,
  document.getElementById('refs')
);
