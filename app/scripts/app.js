angular.module('app', ['app.controllers', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    
    .state('home', {
        url: "/home",
        templateUrl: "templates/home.html",
        controller: "HomeCtrl"
    })
    .state('game', {
        url: "/game",
        templateUrl: "templates/game.html",
        controller: "GameCtrl"
    })
    .state('settings', {
        url: "/settings",
        templateUrl: "templates/settings.html",
        controller: "SettingsCtrl"
    })
        .state('leaderboard', {
        url: "/leaderboard",
        templateUrl: "templates/leaderboard.html",
        controller: "LeaderboardCtrl"
    });

    $urlRouterProvider.otherwise("/home");
});