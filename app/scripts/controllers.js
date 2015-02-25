angular.module('app.controllers', [])  
.controller('HomeCtrl', function($scope, $state) {
    $scope.test = 'home';
    $scope.goHome = function() {
        $state.go('home');
    }
})

    .controller('GameCtrl', function($scope, $state) {
    $scope.test = 'This is a test to add more content using {{}}.';
        $scope.goHome = function() {
        $state.go('home');
        }
	})

	.controller('SettingsCtrl', function($scope, $state) {
    $scope.test = 'settings';
        $scope.goHome = function() {
        $state.go('home');
        }
	})

	.controller('LeaderboardCtrl', function($scope, $state) {
    $scope.test = 'leaderboard';
        $scope.goHome = function() {
        $state.go('home');
        }
	});





