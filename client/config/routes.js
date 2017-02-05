
function config($stateProvider, $windowProvider, $logProvider, $urlRouterProvider) {
    var $window = $windowProvider.$get();
    $logProvider.debugEnabled(false);
    
    $stateProvider
    .state('context', {
        templateUrl: './modules/common/views/login.html',
        controller: 'LoginCtrl',
        url: '/'
    })
    .state('dashboard', {
        templateUrl: './modules/dashboard/views/dashboard.html',
        controller:'dashboardController',
        url: '/dashboard'
    })
    
    $urlRouterProvider.otherwise("/");

    
}

config.$inject = ['$stateProvider', '$windowProvider', '$logProvider', '$urlRouterProvider'];

export default config;