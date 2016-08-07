'use strict';

// Configuring the Articles module
angular.module('needs').run(['Menus',
  function (Menus) {
    // Add the articles dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Needs',
      state: 'needs',
      type: 'dropdown'
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'needs', {
      title: 'List Needs',
      state: 'needs.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'needs', {
      title: 'Create Needs',
      state: 'needs.create'
    });
  }
]);
