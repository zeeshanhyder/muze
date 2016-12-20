(function(){
  'use strict';

  angular.module('muze')
  .service('muzeApiService',MuzeApiService);

  /** @ngInject */

  function MuzeApiService($http,$q,$rootScope){
    var BASE_URL = 'http://52.63.12.142:8080/MuzeHumm';

    /*
    ** req object params:
    **    @param route [string, required]: api target where request is being sent
    **    @param params [string/object/null, optional]: parameters that need to be sent along with request
    **    @param privateApi [boolean, required]r: tell apiService whether the api we are requesting, needs authentication or not
    */
    this.get = function(req){
      var deferred =  $q.defer();

      //raise private event here, if api is authorized api
      if(req.privateApi){
          $rootScope.$broadcast('$privateApiRequest', deferred);
      }

      $http({
        url: BASE_URL+req.route,
        method : 'GET',
        params: req.params
      })
      .success(function(data){
        deferred.resolve(data);
      })
      .error(function(msg, code){
        deferred.reject(msg);
      });


      return deferred.promise;
    };

    this.post = function(route,params){
      //check auth here
      return false;
    }

  }
})();
