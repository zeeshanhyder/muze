(function(){
  'use strict';


  angular.module('muze')
  .component('shopNow',{
    bindings: {
      props: '='
    },
    templateUrl: '/app/components/shop-now/shop-now.html',
    controller: ShopNowController
  });

  /** @ngInject */

  function ShopNowController(){
    this.component = 'shop-now';
  }

})();
