angular
  .module('muze', ['ui.router','ui.bootstrap'])
  .value('appData',{
    unauthorized : true
  })
  .run(authCheck);

  /** @ngInject */
  function authCheck($rootScope, locationService, $state){
    $rootScope.$on('$privateApiRequest', function(event, req){
      if(!locationService.getSavedLocationLocal()){
        //if user is not logged in, reject the request and bring up login
        req.reject();
        $state.go('location-selection');
      }
    })
  }
