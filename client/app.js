import angular from 'angular';
import 'angular-ui-router';
import {MainCtrl} from './main/MainCtrl';
import './styles/styles.scss';

let huvas = angular.module('angularWebpack', ['ui.router'])
.controller('MainCtrl', MainCtrl)
.config([ '$urlRouterProvider', '$stateProvider',
    ( $urlRouterProvider, $stateProvider) => {
        $stateProvider
        .state('context', {
            templateUrl: './main/base.html',
            controller: 'MainCtrl',
            url: '/',
         })

          $urlRouterProvider.otherwise("/");
    }]);

huvas.$inject = ['$urlRouterProvider', '$stateProvider'];
export default huvas;