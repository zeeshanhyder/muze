(function(){
  'use strict';

  angular.module('muze')
  .component('adUnit',{
    bindings: {
      props: '=',
      type: '='
    },
    replace: true,
    templateUrl: '/app/components/ad-unit/ad-unit.html',
    controller: AdUnitController
  });

  /** @ngInject */

  function AdUnitController(){
    this.page = 'Ad here';

    this.isLarge = function(){
      if(this.type === 'large'){
        return {
          'min-height': '500px;'
        };
      }else{
        return {};
      }
    }
  }
})();
