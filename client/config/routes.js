
function config($stateProvider, $windowProvider, $logProvider, $urlRouterProvider) {
    var $window = $windowProvider.$get();
    $logProvider.debugEnabled(false);
    
    $stateProvider
    .state('context', {
        templateUrl: './modules/auth/views/login.html',
        controller: 'loginCtrl',
        url: '/'
    })
    .state('dashboard', {
        templateUrl: './modules/dashboard/views/dashboard.html',
        controller:'dashboardController',
        url: '/dashboard'
    })
    .state('dashboard.calendar', {
        templateUrl: './modules/calendar/views/calendar.html',
        controller:'calendarController',
        url: '/calendar'
    })
    .state('dashboard.event', {
        templateUrl: './modules/event/views/event.html',
        controller:'eventController',
        url: '/calendar/event'
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
    
    
    
    $urlRouterProvider.otherwise("/");

    
}

config.$inject = ['$stateProvider', '$windowProvider', '$logProvider', '$urlRouterProvider'];

export default config;