import LocationActions from 'app/actions/LocationActions';

import nocache from 'superagent-no-cache';
import request from 'superagent';

var LocationSource = {
  fetchLocations() {
    return {
      remote() {
        return new Promise((resolve, reject) => {
          setTimeout(function () {
            request
            .get('http://localhost:3000/api/locations')
            .set('Accept', 'application/json')
            .end(function(err, res) {
              if (err) {
                reject(error);
              } else {
                var data = JSON.parse(res.text);
                console.log('Source - fetchLocations()', data);
                resolve(data);
              }
            });
          }, 3000);
        });
      },

      local() {
        // Never check locally, always fetch remotely.
        return null;
      },

      success: LocationActions.updateLocations,
      error: LocationActions.locationsFailed,
      loading: LocationActions.fetchLocations
    }
  }
};

module.exports = LocationSource;
