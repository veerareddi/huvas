
class controller {
  
  constructor($scope, $state) {
    this.scope = $scope;
    console.log($scope);
    this.init($state);
  }

  init($state) {
    this.state = $state;
    console.log('calendar-controller initialized');
    console.log($state);
    
  }
}

controller.$inject = ['$scope', '$state'];

export default controller;
