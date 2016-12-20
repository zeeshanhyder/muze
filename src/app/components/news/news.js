(function(){
  'use strict';


    /** @ngInject */

  angular.module('muze')
  .component('news',{
    bindings : {
      props: '='
    },
    templateUrl: '/app/components/news/news.html',
    controller: NewsController

  });

  /** @ngInject */
  function NewsController(){
    this.component = 'news';

    this.cards = [
      {
        image: 'image 1',
        desc: 'This is a sample description'
      },
      {
        image: 'image 1',
        desc: 'This is a sample description'
      },
      {
        image: 'image 1',
        desc: 'This is a sample description'
      }
    ];
  }
})();
