(function(){
  'use strict';


    /** @ngInject */

  angular.module('muze')
  .component('shows',{
    bindings: {
      props: '='
    },
    templateUrl: '/app/components/shows/shows.html',
    controller: ShowsController
  });

  /** @ngInject */

  function ShowsController(){
    this.component = 'shows'
  }
})();
