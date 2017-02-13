
class controller {
  
  constructor($scope, $state, loginService) {
    this.scope = $scope;
    this.state = $state;
    this.loginService = loginService;
    this.init();
  }

  init() {
    
  }
}

controller.$inject = ['$scope', '$state', 'loginService'];

export default controller;
