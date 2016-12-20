(function(){
  'use strict';

  angular.module('muze')
  .service('authService', authService);

  /** @ngInject */

 function authService(muzeApiService){
    var authService = this;

    authService.isAuthenticated = function(){
      return true;
    }
  }

})();
