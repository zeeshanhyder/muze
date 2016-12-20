(function(){
  'use strict';

  angular.module('muze')
  .component('rjProfiles',{
    bindings: {
      props: '='
    },
    templateUrl: '/app/components/rj-profiles/rj-profiles.html',
    controller: RJProfilesController
  });

  /** @ngInject */

  function RJProfilesController(){
    this.component = 'RJ Profiles';
  }
})();
