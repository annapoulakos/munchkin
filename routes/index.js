/* jshint esnext: true */

import HomeTemplate from './home/main.html';
import HomeController from './home/';

var jpRoute = function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        template: HomeTemplate,
        controller: HomeController,
        controllerAs: 'Home',
    })
    .otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
};

jpRoute.$inject = ['$routeProvider', '$locationProvider'];

export default jpRoute;
