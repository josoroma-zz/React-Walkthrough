/* -------------------------------------------------------------------------- */

require('client/public/css/style.css');

import React from 'react';
import ReactDOM from 'react-dom';

/* -------------------------------------------------------------------------- */

const user = {
  username: 'josoroma',
  lat: 1.1,
  lng: 2.2,
};

/* -------------------------------------------------------------------------- */
/* Classic                                                                    */
/* -------------------------------------------------------------------------- */

class UserProfileClassic extends React.Component {
  render() {
    const {user} = this.props;

    return (
      <div className="user-username">{user.username}</div>
    );
  }
}

ReactDOM.render(
  <UserProfileClassic user={user} />,
  document.getElementById('user-profile-classic')
);

/* -------------------------------------------------------------------------- */
/* propTypes Checking                                                         */
/* -------------------------------------------------------------------------- */

function UserLocation({user}) {
   return (
      <div>[{user.lat}, {user.lng}]</div>
   );
}

UserLocation.propTypes = {
   user: React.PropTypes.object.isRequired
}

ReactDOM.render(
  <UserLocation user={user} />,
  document.getElementById('user-location')
);

/* -------------------------------------------------------------------------- */
/* Reduce Boilerplate                                                         */
/* -------------------------------------------------------------------------- */

// Only render given data out.
const UserProfile = ({user}) => (
  <div className="user-username">{user.username}</div>
);

/**
 * Alternatively, you may use Facebook Flow if you wish:
 * 	http://flowtype.org
 */
UserProfile.propTypes = {
   user: React.PropTypes.object.isRequired
}

ReactDOM.render(
  <UserProfile user={user} />,
  document.getElementById('user-profile')
);

/* -------------------------------------------------------------------------- */
