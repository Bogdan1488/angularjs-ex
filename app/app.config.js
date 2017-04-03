angular.module('phonecatApp').config(configApp);


function configApp($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
    when('/', {
        template: '<phone-list></phone-list>'
    }).
    when('/phones/:phoneId', {
        template: 'dd'
    }).
    otherwise('/');


}

configApp.$inject = ['$locationProvider', '$routeProvider'];