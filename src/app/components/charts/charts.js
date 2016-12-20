(function(){
  'use strict';

  angular.module('muze')
  .component('charts',{
    bindings: {
      props: '='
    },
    templateUrl: '/app/components/charts/charts.html',
    controller: ChartsController
  });

  /** @ngInject */
  function ChartsController(){
    this.page = 'charts';
  }

})();
