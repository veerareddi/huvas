
function config($stateProvider, $windowProvider, $logProvider, $urlRouterProvider) {
    var $window = $windowProvider.$get();
    $logProvider.debugEnabled(false);
    
    $stateProvider
    .state('auth', {
        templateUrl: './modules/auth/views/login.html',
        controller: 'loginCtrl',
        url: '/auth'
    })
    .state('register', {
        templateUrl: './modules/auth/views/org-register.html',
        controller: 'orgRegisterCtrl',
        url: '/register'
    })
    .state('appointment', {
        templateUrl: './modules/appointments/views/dashboard.html',
        controller:'appointmentDBController',
        url: '/appointment'
    })
    .state('appointment.add', {
        templateUrl: './modules/appointments/views/addAppointment.html',
        controller:'appointmentAddController',
        url: '/add'
    })
    
    $urlRouterProvider.otherwise("/auth");
}

config.$inject = ['$stateProvider', '$windowProvider', '$logProvider', '$urlRouterProvider'];

export default config;