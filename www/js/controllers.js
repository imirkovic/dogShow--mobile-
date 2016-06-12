angular.module('dogShow.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('LeaderController', ['$scope','Leader', 'baseURL', function($scope, Leader, baseURL) {
        $scope.message="Leader loading...";
        $scope.error="";
        $scope.baseURL = baseURL;
        
            Leader.find()
                .$promise.then(
                function (response) {
                    $scope.leaders = response;

                },
                function (response) {
                           });
 }])
 
 .controller('JudgesController', ['$scope','Judge', 'baseURL', function($scope, Judge, baseURL) {

        $scope.baseURL = baseURL;
        
            Judge.find()
                .$promise.then(
                function (response) {
                    $scope.judges = response;

                },
                function (response) {
                           });
 }])

.controller('CompetitionsController', ['$scope','Competition', 'baseURL', function($scope, Competition, baseURL) {
        $scope.baseURL = baseURL;
        
            Competition.find()
                .$promise.then(
                function (response) {
                    $scope.competition = response;

                },
                function (response) {
                           });
 }])

.controller('IndexController', ['$scope', 'Competition', 'Judge', 'Leader', 'baseURL', 
                        function($scope, Competition, Judge, Leader, baseURL) {
          
          $scope.baseURL = baseURL;

          Competition.findById({id: 1})
                .$promise.then(
                function (response) {
                    $scope.competition = response;

                },
                function (response) {
                              });
                
         Judge.findById({id: 0})
                .$promise.then(
                function (response) {
                    $scope.judge = response;
                    console.log("Judges colected"+ $scope.judges );

                },
                function (response) {
                                   });

         Leader.findById({id: 2})
                .$promise.then(
                function (response) {
                    $scope.leader = response;
                    console.log("Leader colected"+ $scope.judges );

                },
                function (response) {
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                });
  
    }])

;
