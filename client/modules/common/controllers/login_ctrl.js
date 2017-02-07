
class controller {
  
  constructor($scope, $state, loginService) {
    this.scope = $scope;
    this.scope.user = {email:'veerareddy.obula@gmail.com',password:'veera@168', rememberMe:true};
    this.loginService = loginService;
    console.log($scope);
    this.init($state);
  }

  init($state) {
    this.state = $state;
    console.log('login-controller initialized');
    console.log($state);
    this.scope.onLoginClick = () => {
      console.log('::::::::: On Login Click Handler :::::::::::');
      console.log(this.scope.user);
      let self = this;
      this.loginService.validateLoginDetails(this.scope.user).then(function(response){
        console.log('::::::::::::::::::::> Promise return ::::::::::::::::::::');
        self.state.go('dashboard');
      })
    };
  }
}

controller.$inject = ['$scope', '$state', 'loginService'];

export default controller;
