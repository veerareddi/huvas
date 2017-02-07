
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
        url: '/dashboard/calendar'
    })
    
    
    
    $urlRouterProvider.otherwise("/");

    
}

config.$inject = ['$stateProvider', '$windowProvider', '$logProvider', '$urlRouterProvider'];

export default config;