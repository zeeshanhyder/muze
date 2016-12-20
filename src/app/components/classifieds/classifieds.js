(function(){
  'use strict';

  angular.module('muze')
  .component('classifieds',{
    bindings: {
      props: '='
    },
    templateUrl: '/app/components/classifieds/classifieds.html',
    controller: ClassifiedsController
  });

  /** @ngInject */

  function ClassifiedsController(){
    this.component = 'classifieds';
  }
})();
