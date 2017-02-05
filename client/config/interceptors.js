export default angular.module('app.interceptors', []).config(['$httpProvider', '$locationProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    $httpProvider.interceptors.push(['$q',
        function ($q) {
            return {
                'request': function (config) {
                    // Todo: place the tenantId into the header for the blob calls
                    if (config.method === 'PATCH') {
                        config.method = 'POST';
                        config.headers['X-HTTP-Method-Override'] = 'PATCH';
                    }
                    //config.headers['cache-control'] = 'public, max-age=31557600';
                    return config;
                },
                'requestError': function (rejection) {
                    return $q.reject(rejection);
                },
                'response': function (response) {
                    return response;
                },
                'responseError': function (rejection) {
                    return $q.reject(rejection);
                }
            };
        }]);
}]);

