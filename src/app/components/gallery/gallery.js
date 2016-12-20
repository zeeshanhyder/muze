(function(){
  'use strict';

  angular.module('muze')
  .component('gallery',{
    bindings: {
      props: '='
    },
    templateUrl: '/app/components/gallery/gallery.html',
    controller: GalleryController
  });

  /** @ngInject */

  function GalleryController(){
    this.component = 'Gallery';
  }
})();
