(function(){
  'use strict';

  angular.module('muze')
  .component('app', {
    bindings: {
      city: '<'
    },
    templateUrl: 'app/main.html',
    controller: MainController
  });

  /** @ngInject */

  function MainController($uibModal,authService, $state) {
    var vm = this;


    function checkLocation(){
      /*$uibModal.open({
        controller: 'LocationSelectionDialogController',
        templateUrl: '/app/components/dialog/location-selection/location-selection.html',
        controllerAs: '$ctrl',
        resolve: {
          items: function(){
            return {};
          }
        }
      });
      */

      if(!vm.city){
        $state.go('location-selection');
      }
    }





    /** Initialization **/

    function init(){

      //check location
      checkLocation();

    }
    init();
  }

})();
