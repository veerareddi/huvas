
import LoginCtrl            from './controllers/login_ctrl';
import LoginService         from './services/login_service';

export default angular.module('app.common', [])
    .controller('loginCtrl', LoginCtrl)
    .service('loginService', LoginService)
    .name;