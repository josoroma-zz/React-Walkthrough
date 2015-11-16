/**
 * The Store is our data warehouse. This is the single source of truth for a
 * particular piece of our application’s state.
 *
 * Class => Store
 * Class Prototype Methods => Deal with Actions ==> Action Handlers
 */

import alt from '../alt';
import LocationActions from 'app/actions/LocationActions';
import LocationSource from 'app/sources/LocationSource';
import FavoritesStore from 'app/stores/FavoritesStore';

class LocationStore {
  constructor() {
    // Instance variables defined anywhere in the Store will become the State.
    // We can initialize these in the constructor and then update them directly
    // in the prototype methods.
    this.locations = [];
    this.errorMessage = null;

    // We bind our Action Handlers to our Actions.
    this.bindListeners({
      handleUpdateLocations: LocationActions.UPDATE_LOCATIONS,
      handleFetchLocations: LocationActions.FETCH_LOCATIONS,
      handleLocationsFailed: LocationActions.LOCATIONS_FAILED,
      setFavorites: LocationActions.FAVORITE_LOCATION
    });

    this.exportPublicMethods({
      getLocation: this.getLocation
    });

    console.log('Location Store - constructor() - this.exportAsync(LocationSource)');

    this.exportAsync(LocationSource);
  }

  // These are called action handlers.
  // Stores automatically emit a change event when an action is dispatched
  // through the store and the action handler ends. In order to suppress the
  // change event we can return false from any action handler.
  handleUpdateLocations(locations) {
    this.locations = locations;
    this.errorMessage = null;
  }

  // Reset the array while we're fetching new locations so React can be smart
  // and render a spinner for us since the data is empty.
  handleFetchLocations() {
    console.log('Location Store - handleFetchLocations()');

    this.locations = [];
  }

  handleLocationsFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

  resetAllFavorites() {
    this.locations = this.locations.map((location) => {
      return {
        id: location.id,
        name: location.name,
        has_favorite: false
      };
    });
  }

  setFavorites(location) {
    console.log('Location Store - setFavorites(location) ', location);

    /**
     * As an application grows, dependencies across different stores are a near
     * certainty. Store A will inevitably need Store B to update itself first,
     * so that Store A can know how to update itself. We need the dispatcher
     * to be able to invoke the callback for Store B, and finish that callback,
     * before moving forward with Store A. To declaratively assert this
     * dependency, a store needs to be able to say to the dispatcher,
     *  "I need to wait for Store B to finish processing this action." The
     *  dispatcher provides this functionality through its waitFor() method.
     */
    this.waitFor(FavoritesStore);

    var favoritedLocations = FavoritesStore.getState().locations;

    console.log('Location Store - setFavorites(location) - favoritedLocations', favoritedLocations);

    this.resetAllFavorites();

    favoritedLocations.forEach((location) => {
      // find each location in the array
      for (var i = 0; i < this.locations.length; i += 1) {

        // set has_favorite to true
        if (this.locations[i].id === location.id) {
          this.locations[i].has_favorite = true;
          console.log('Location Store - setFavorites(location) - favoritedLocations.forEach', this.locations[i]);
          break;
        }
      }
    });
  }

  getLocation(id) {
    console.log('Location Store - getLocation(id)', id);

    var { locations } = this.getState();
    for (var i = 0; i < locations.length; i += 1) {
      if (locations[i].id === id) {
        return locations[i];
      }
    }

    return null;
  }
}

module.exports = alt.createStore(LocationStore, 'LocationStore');
