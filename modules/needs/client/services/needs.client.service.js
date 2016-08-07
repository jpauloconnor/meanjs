'use strict';

//Needs service used for communicating with the needs REST endpoints
angular.module('needs').factory('Needs', ['$resource',
  function ($resource) {
    return $resource('api/needs/:needId', {
      needId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
