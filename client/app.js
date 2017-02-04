import angular from 'angular';
import 'angular-ui-router';

import LoginCtrl    from './modules/common/controllers/login-ctrl.js';
import LoginService from './modules/common/services/login-service.js'

let huvas = angular.module('angularWebpack', ['ui.router'])
.controller('LoginCtrl', LoginCtrl)
.service('LoginService', LoginService)
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