/**
 * Created by yutao on 11/19/15.
 */
angular.module('ocrApp')
    .controller('MainCtrl', function ($scope, $http) {
        // list all races
        $http({
            method: 'GET',
            url: '/races'
        }).then(function(response) {
            $scope.races = response.data;
            console.log('races' + response.data);
        }, function(response) {
            console.error('Error requesting races');
        });
    });