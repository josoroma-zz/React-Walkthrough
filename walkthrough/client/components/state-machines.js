/* -------------------------------------------------------------------------- */

require('client/public/css/style.css');

import React from 'react';
import ReactDOM from 'react-dom';

/* -------------------------------------------------------------------------- */

class BaseComponent extends React.Component {
  // bindHandlers is a kind of magic feature that bound all methods to "this".
  bindHandlers(...methods) {
    methods.map((method) => this[method] = this[method].bind(this));
  }
}

class ButtonLike extends BaseComponent {
  /**
   * Operations usually carried out in componentWillMount go
   * in our Constructor.
   */
  constructor(props) {
    super(props);

    /**
     * Before bindHandlers method:
     * 	- this.handleClick = this.handleClick.bind(this);
     */

    // Comma separated handlers catalog.
    this.bindHandlers('handleClick');

    // State means just properties on the constructor.
    this.state = {
      liked: props.initialLike,
    };
  }

  handleClick(e) {
    this.setState({
      liked: !this.state.liked
    });
  }

  /**
   * Add to your babelrc => "optional": [ "es7.classProperties" ]
   *
   * handleClick = (e) => { this.setState({liked: !this.state.liked}); }
   */

  render() {
    const buttonState = this.state.liked ? 'like' : 'unlike';
    const like = require('client/public/img/like.png');

    return (
      <img
        className={'button ' + buttonState}
        onClick={this.handleClick}
        src={like}
      />
    );
  }

}

ButtonLike.propTypes = {
  author: React.PropTypes.string,
  initialLike: React.PropTypes.bool,
};

ButtonLike.defaultProps = {
  author: 'Josoroma',
  initialLike: true
};

/* -------------------------------------------------------------------------- */

ReactDOM.render(
  <ButtonLike />,
  document.getElementById('button-like')
);

/* -------------------------------------------------------------------------- */
