(function(){
  'use strict';

  angular.module('muze')
  .factory('musicPlayerFactory', musicPlayerFactory);

  /** @ngInject */

  function musicPlayerFactory($transitions,muzeApiService, locationService, userDataFactory){
    var music = {};

    // urls
    music._128bitURL = 'http://93.190.141.15:7004/HUMM_128.mp3';
    music._64bitURL = 'http://93.190.141.15:7004/humm_64.mp3';

    // start with low quality first
    music.src = music._128bitURL;
    music.highQuality = true;

    // start with paused state
    music.playState = false;

    //feedlist
    music.feedList = [];
    music.currentSong = null;

    music.pause = function(){
      music.playState = false;
      music.audioStream.pause();
    };

    music.play = function(){
      music.playState = true;
      music.audioStream.play();
    };

    music.setHighQuality = function(highQuality){
      music.pause();
      if(highQuality){
        music.src = music.highBitRateURL;
        music.highQuality = true;
      }else{
        music.src = music.lowBitRateURL;
        music.highQuality = false;
      }
      //create new stream
      music.audioStream = new Audio(music.src);
      music.play();
    };

    music.getQuality = function(){
      if(music.highQuality){
        return '128';
      }else{
        return '64';
      }
    };

    music.getSource = function(){
      return music.src;
    };

    music.getFeedList = function(){
      var currentDatetime = locationService.getNZLocalTime();
      //currentDatetime = currentDatetime.replace(/\.[0-9]*Z$/,'');
      return muzeApiService.get({
        route: '/feed/getFeedList',
        params: {
          category_id : locationService.getCategoryId(0),
          venue_id : locationService.getVenueId(0),
          action_id : 1,
          currentDatetime: currentDatetime,
          user_id : userDataFactory.getUserId()
        }
      });
    };

    function moveCurrentlyPlayingSong(){
        music.feedList.forEach(function(song, index){
          if(song.isCurrentSong){
            music.currentSong = song;
            music.feedList.splice(index,1);
            return;
          }
        });
    }

    function init(){

      // create new audio stream
      music.audioStream = new Audio(music.src);

      // get feed list
      music.getFeedList()
      .then(function(response){
        if(response.program){
          music.feedList = response.program.feedlist;
          moveCurrentlyPlayingSong();
        }
      });

      $transitions.onStart({}, function($transition$){
        if($transition$.$to().name === 'location-selection'){
          music.pause();
        }
      });
    }

    init();

    return music;

  }
})();
