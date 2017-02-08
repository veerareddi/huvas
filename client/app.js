import angular from 'angular';
import 'angular-ui-router';

import constantsModule      from './config/constants';
import interceptorsModule   from './config/interceptors';
import routes               from './config/routes';

import auth                 from './modules/auth/module';
import dashboard            from './modules/dashboard/module';
import calendar             from './modules/calendar/module';
import event                from './modules/event/module';

let huvas = angular.module('angularWebpack', [
    'ui.router'
    ,interceptorsModule.name
    ,constantsModule
    ,auth
    ,dashboard
    ,calendar
    ,event
]);


huvas.config(routes);
huvas.$inject = ['$urlRouterProvider', '$stateProvider'];
export default huvas;