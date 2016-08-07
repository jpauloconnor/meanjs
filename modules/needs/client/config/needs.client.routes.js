'use strict';

// Setting up route
angular.module('needs').config(['$stateProvider',
  function ($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('needs', {
        abstract: true,
        url: '/needs',
        template: '<ui-view/>',
        data: {
          roles: ['user', 'admin']
        }
      })
      .state('needs.list', {
        url: '',
        templateUrl: 'modules/needs/views/list-needs.client.view.html'
      })
      .state('needs.create', {
        url: '/create',
        templateUrl: 'modules/needs/views/create-need.client.view.html'
      })
      .state('needs.view', {
        url: '/:needId',
        templateUrl: 'modules/needs/views/view-need.client.view.html'
      })
      .state('needs.edit', {
        url: '/:needId/edit',
        templateUrl: 'modules/needs/views/edit-need.client.view.html'
      });
  }
]);
