import alt from '../alt';
import LocationActions from 'app/actions/LocationActions';

class FavoritesStore {
  constructor() {
    this.locations = [];

    this.bindListeners({
      addFavoriteLocation: LocationActions.FAVORITE_LOCATION
    });
  }

  addFavoriteLocation(location) {
    console.log('Favorites Store - addFavoriteLocation(location)', location);

    this.locations.push(location);
  }
}

module.exports = alt.createStore(FavoritesStore, 'FavoritesStore');
