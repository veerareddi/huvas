
import LoginCtrl            from './controllers/login_ctrl';
import LoginService         from './services/login_service';
import OrgRegisterCtrl      from './controllers/org_register_ctrl'

export default angular.module('app.auth', [])
    .controller('loginCtrl', LoginCtrl)
    .controller('orgRegisterCtrl', OrgRegisterCtrl)
    .service('loginService', LoginService)
    .name;