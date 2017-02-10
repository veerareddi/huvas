
class controller {
  
  constructor($scope, $state, loginService) {
    this.scope = $scope;
    this.scope.user = {email:'veerareddy.obula@gmail.com',password:'veera@168', rememberMe:true};
    this.loginService = loginService;
    this.init($state);
  }

  init($state) {
    this.state = $state;
    this.scope.onLoginClick = () => {
      let self = this;
      this.loginService.validateLoginDetails(this.scope.user).then(function(response){
        self.state.go('dashboard');
      })
    };
  }
}

controller.$inject = ['$scope', '$state', 'loginService'];

export default controller;
