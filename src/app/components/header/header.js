(function(){
  'use strict';


    /** @ngInject */

  angular.module('muze')
  .component('appHeader',{
    bindings: {
      props: '='
    },
    templateUrl: '/app/components/header/header.html',
    controller: HeaderController
  });

  /** @ngInject */

  function HeaderController($scope,locationService, $state){
    var vm = this;
    vm.componentName = 'header';

    $scope.$watch(function(){
        return $state.$current.name
    }, function(newVal, oldVal){
        vm.currentState = newVal;
    })

    function init(){

    }
    init();

  }

})();
