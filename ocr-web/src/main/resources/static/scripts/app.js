/**
 * Created by yutao on 11/19/15.
 */
angular
  .module('ocrApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/participants/:raceId', {
          templateUrl: 'views/participants.html',
          controller: 'ParticipantsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
