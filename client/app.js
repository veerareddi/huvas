import angular from 'angular';
import 'angular-ui-router';
import 'angular-animate';
import 'angularjs-toaster';

import constantsModule      from './config/constants';
import interceptorsModule   from './config/interceptors';
import routes               from './config/routes';

import auth                 from './modules/auth/module';
import appointments         from './modules/appointments/module';
import dashboard            from './modules/dashboard/module';
import calendar             from './modules/calendar/module';
import event                from './modules/event/module';
import common               from './modules/_common/module';

let huvas = angular.module('angularWebpack', [
    'ui.router'
    ,'ngAnimate'
    ,'toaster'
    ,interceptorsModule.name
    ,constantsModule
    ,auth
    ,appointments
    ,dashboard
    ,calendar
    ,event
    ,common
]);


huvas.config(routes);
huvas.$inject = ['$urlRouterProvider', '$stateProvider'];
export default huvas;