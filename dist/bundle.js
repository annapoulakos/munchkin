(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* jshint esnext: true */

/* Imports */
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

angular.module('jpMunchkin', ['ngRoute']).config(_routes2['default']);

},{"./routes":4}],2:[function(require,module,exports){
/* jshint esnext: true */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeController = function HomeController() {
    _classCallCheck(this, HomeController);
};

HomeController.$inject = [];

exports["default"] = HomeController;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
module.exports = '<main role="main">\n    This is the home controller view.\n</main>\n';
},{}],4:[function(require,module,exports){
/* jshint esnext: true */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _home = require('./home');

var _home2 = _interopRequireDefault(_home);

var HomeTemplate = require('./home/main.html');

var jpRoute = function jpRoute($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        template: HomeTemplate,
        controller: _home2['default'],
        controllerAs: 'Home' }).otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
};

jpRoute.$inject = ['$routeProvider', '$locationProvider'];

exports['default'] = jpRoute;
module.exports = exports['default'];

},{"./home":2,"./home/main.html":3}]},{},[1]);
