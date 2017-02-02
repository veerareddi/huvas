import angular from 'angular';
import 'angular-ui-router';

import LoginCtrl from './modules/common/controllers/login-ctrl.js';

let huvas = angular.module('angularWebpack', ['ui.router'])
.controller('LoginCtrl', LoginCtrl)
.config([ '$urlRouterProvider', '$stateProvider',
    ( $urlRouterProvider, $stateProvider) => {
        $stateProvider
        .state('context', {
            templateUrl: './modules/common/views/login.html',
            controller: 'LoginCtrl',
            url: '/',
         })

          $urlRouterProvider.otherwise("/");
    }]);

huvas.$inject = ['$urlRouterProvider', '$stateProvider'];
export default huvas;