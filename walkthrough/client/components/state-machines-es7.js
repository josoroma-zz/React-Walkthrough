/* -------------------------------------------------------------------------- */

require('client/public/css/style.css');

import React from 'react';
import ReactDOM from 'react-dom';

/* -------------------------------------------------------------------------- */

class ButtonLike extends React.Component{

  // ES7 property initializers.
  static propTypes = {
    author: React.PropTypes.string,
    initialLike: React.PropTypes.bool,
  };

  static defaultProps = {
    author: 'Josoroma',
    initialLike: false
  };

  state = {
    liked: this.props.initialLike,
  };

  /**
   * The body of ES6 arrow functions share the same lexical "this" as the code
   * that surrounds them, which gets us the desired result because of the way
   * that ES7 property initializers are scoped.
   */
  handleClick = (e) => {
    console.log(this);

    this.setState({
      liked: !this.state.liked
    });
  }

  // handleClick(e) {
  //  console.log(this);
  // }

  render = () => {
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

/* -------------------------------------------------------------------------- */

ReactDOM.render(
  <ButtonLike />,
  document.getElementById('button-like')
);

/* -------------------------------------------------------------------------- */
