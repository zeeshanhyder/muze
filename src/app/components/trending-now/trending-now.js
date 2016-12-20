(function(){
  'use strict';

  angular.module('muze')
  .component('trendingNow', {
    bindings: {
      props: '='
    },
    templateUrl: '/app/components/trending-now/trending-now.html',
    controller: TrendingNowController
  });

  /** @ngInject */

  function TrendingNowController(){
    this.component = 'trending now';

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
