(function(){
  'use strict';

  angular.module('muze')
  .service('userDataFactory',UserDataFactory);

  /** @ngInject */
  function UserDataFactory(muzeApiService,$timeout,$q,$window){

    var userData;

    this.getUser = function(){
      return; //muzeApiService.get({route:'/city/list_city',param:''});
    };

    this.saveUser = function(){
      var deferred = $q.defer();
      $timeout(function(){
        $window.localStorage['user']= JSON.stringify({user_id: 381});
        return user;
      },100)
      .then(function(data){

        //store user
        userData = data;
        //resolve promise
        deferred.resolve(userData);
      }, function(err){
        deferred.reject(err);
      });

      return deferred.promise;
    };

    this.getUserDetails = function(){
      return userData;
    };

    this.getUserId = function(){
      return userData.user_id;
    };

    function init(){
      if(!$window.localStorage['user']){
          $window.localStorage['user']= JSON.stringify({user_id: 381});
      }
      userData = JSON.parse($window.localStorage['user']);

    }

    init();

  }
})();
