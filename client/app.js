import angular from 'angular';
import 'angular-ui-router';

import constantsModule      from './config/constants';
import interceptorsModule   from './config/interceptors';
import routes               from './config/routes';

import common               from './modules/common/module';
import dashboard            from './modules/dashboard/module';
import calendar             from './modules/calendar/module';

let huvas = angular.module('angularWebpack', [
    'ui.router'
    ,interceptorsModule.name
    ,constantsModule
    ,common
    ,dashboard
    ,calendar
]);


huvas.config(routes);

huvas.$inject = ['$urlRouterProvider', '$stateProvider'];
export default huvas;