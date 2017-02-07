
import DashboardController  from './controllers/dashboard-ctrl.js';

export default angular.module('app.dashboard', [])
    .controller('dashboardController', DashboardController)
    .name;