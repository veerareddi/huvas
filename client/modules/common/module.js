
import LoginCtrl            from './controllers/login-ctrl.js';
import LoginService         from './services/login-service.js'

export default angular.module('app.dashboard', [])
    .controller('LoginCtrl', LoginCtrl)
    .service('LoginService', LoginService)
    .name;