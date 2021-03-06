'use strict';

// Needs controller
angular.module('needs').controller('NeedsController', ['$scope', '$stateParams', '$location', 'Authentication', 'needs',
  function ($scope, $stateParams, $location, Authentication, Needs) {
    $scope.authentication = Authentication;

    // Create new Need
    $scope.create = function () {
      // Create new Need object
      var need = new Needs({
        title: this.title,
        content: this.content
      });

      // Redirect after save
      need.$save(function (response) {
        $location.path('needs/' + response._id);

        // Clear form fields
        $scope.title = '';
        $scope.content = '';
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Remove existing Need
    $scope.remove = function (need) {
      if (need) {
        need.$remove();

        for (var i in $scope.needs) {
          if ($scope.needs[i] === need) {
            $scope.needs.splice(i, 1);
          }
        }
      } else {
        $scope.need.$remove(function () {
          $location.path('needs');
        });
      }
    };

    // Update existing need
    $scope.update = function () {
      var need = $scope.need;

      need.$update(function () {
        $location.path('needs/' + need._id);
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Find a list of Needs
    $scope.find = function () {
      $scope.needs = Needs.query();
    };

    // Find existing need
    $scope.findOne = function () {
      $scope.need = Needs.get({
        needId: $stateParams.needId
      });
    };
  }
]);
