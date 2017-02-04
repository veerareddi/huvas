'use strict';

import angular from 'angular';

class controller {
  
  constructor($scope, LoginService) {
    this.scope = $scope;
    this.scope.user = {email:'veerareddy.obula@gmail.com',password:'veera@168', rememberMe:true};
    
    this.loginService = LoginService;
    console.log($scope);
    this.init();
  }

  init() {
    console.log('login-controller initialized');
    this.scope.onLoginClick = () => {
      console.log('::::::::: On Login Click Handler :::::::::::');
      console.log(this.scope.user);
      this.loginService.validateLoginDetails(this.scope.user).then(function(response){
        console.log('::::::::::::::::::::> Promise return ::::::::::::::::::::');
      })
    };
  }
  
  
  
}

// Strict DI for minification (order is important)
controller.$inject = ['$scope', 'LoginService'];

export default controller;
