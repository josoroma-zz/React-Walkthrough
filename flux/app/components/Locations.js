/* ---------------------------------------------------------------------------*/

import React from 'react';

import AltContainer from 'alt-container';
import LocationStore from 'app/stores/LocationStore';
import FavoritesStore from 'app/stores/FavoritesStore';
import LocationActions from 'app/actions/LocationActions';

/* ---------------------------------------------------------------------------*/

var Favorites = React.createClass({
  removeFave(ev) {
    var location = LocationStore.getLocation(
      Number(ev.target.getAttribute('data-id'))
    );

    // ...
  },

  render() {
    return (
      <ul>
        {this.props.locations.map((location, i) => {
          return (
            <li key={i}>
              {location.name}
              <button onClick={this.removeFave} data-id={location.id}>
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
});

/* ---------------------------------------------------------------------------*/

var AllLocations = React.createClass({
  addFave(ev) {
    console.log('Component - addFave()');

    var location = LocationStore.getLocation(
      Number(ev.target.getAttribute('data-id'))
    );

    console.log('Component - LocationActions.favoriteLocation(location)');

    LocationActions.favoriteLocation(location);
  },

  render() {
    if (this.props.errorMessage) {
      return (
        <div>{this.props.errorMessage}</div>
      );
    }

    if (LocationStore.isLoading()) {
      var spinner = require('app/assets/img/spinner.gif');

      return (
        <div>
          <img src={spinner} />
        </div>
      )
    }

    return (
      <ul>
        {this.props.locations.map((location, i) => {
          var faveButton = (
            <button onClick={this.addFave} data-id={location.id}>
              Favorite
            </button>
          );
          return (
            <li key={i}>
              {location.name} {location.has_favorite ? '<3' : faveButton}
            </li>
          );
        })}
      </ul>
    );
  }
});

/* ---------------------------------------------------------------------------*/

/**
 * The important piece here is how we listen to stores and get data out of it.
 */
var Locations = React.createClass({
  // Adds the event listener.
  componentDidMount() {
    LocationStore.listen(this.onChange);

    console.log('Component - fetchLocations');

    LocationStore.fetchLocations();
  },

  // Removes the event listener.
  componentWillUnmount() {
    LocationStore.unlisten(this.onChange);
  },

  onChange(state) {
    this.setState(state);
  },

  /**
   * Containers that wraps our components, the duty of a container component
   * is to handle all the data fetching and communication with the stores, it
   * then renders the corresponding children. The sub-components just render
   * markup and are data agnostic thus making them highly reusable.
   *
   * AltContainer doesn’t just wrap our dumb components into a high-performance
   * store listener but it also serves as a jack-of-all-trades component where
   * we can directly inject any dependencies into our components such as
   * stores, actions, or the flux context.
   */
  render() {
    return (
      <div>
        <h1>Locations</h1>
        <AltContainer store={LocationStore}>
          <AllLocations />
        </AltContainer>

        <h1>Favorites</h1>
        <AltContainer store={FavoritesStore}>
          <Favorites />
        </AltContainer>
      </div>
    );
  }
});

/* ---------------------------------------------------------------------------*/

module.exports = Locations;

/* ---------------------------------------------------------------------------*/
