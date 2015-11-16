/* ---------------------------------------------------------------------------*/

import alt from '../alt';

/* ---------------------------------------------------------------------------*/

/**
 * This action take in an array of locations we’ll pass in at the start of the
 * application and just dispatch them to the store.
 *
 * Class => Action
 * Class Prototype Methods => Actions
 */
class LocationActions {
  updateLocations(locations) {
    // We can use this.dispatch to dispatch our payload through the Dispatcher
    // and onto the Stores.
    this.dispatch(locations);
  }

  // Fetchs locations and then call updateLocations when it successfully
  // completes.
  fetchLocations() {
    console.log('Action - fetchLocations()');

    this.dispatch();
  }

  // Deals with the locations not being available.
  locationsFailed(errorMessage) {
    this.dispatch(errorMessage);
  }

  // Say we have a new FavoritesStore where we’ll be able to mark our favorite
  // locations. We want to update the LocationStore only after the FavoriteStore
  // gets its update.
  favoriteLocation(location) {
    console.log('Action - favoriteLocation(location)', location);

    this.dispatch(location);
  }
}

module.exports = alt.createActions(LocationActions);
