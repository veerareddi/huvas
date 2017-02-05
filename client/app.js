import angular from 'angular';
import 'angular-ui-router';

import constantsModule      from './config/constants';
import interceptorsModule   from './config/interceptors';
import routes               from './config/routes';

import dashboard            from './modules/dashboard/module';
import common               from './modules/common/module';



let huvas = angular.module('angularWebpack', [
    'ui.router'
    ,interceptorsModule.name
    ,constantsModule
    ,common
    ,dashboard
]);


huvas.config(routes);

huvas.$inject = ['$urlRouterProvider', '$stateProvider'];
export default huvas;