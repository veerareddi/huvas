
function breadcrumDirective($state) {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            breadcrumDs:'='
        },
        templateUrl: './modules/_common/templates/breadcrum.html',
        link: function (scope) {
            console.log('::::::::::: I am breadcrum Directive :::::::::::');    
            console.log(scope.breadcrumDs);
        }
    };
}


breadcrumDirective.$inject = ['$state'];
export default breadcrumDirective;