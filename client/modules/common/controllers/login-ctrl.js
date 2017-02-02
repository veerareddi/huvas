'use strict';

import angular from 'angular';

class controller {

  constructor() {
    this.init();
  }

  init() {
    console.log('login-controller initialized');
  }
}

// Strict DI for minification (order is important)
controller.$inject = [];

export default controller;
