(function(){
  'use strict';
  angular.module('muze')
  .component('musicPlayer', {
    bindings: {
      props: '=',
      lite: '='
    },
    templateUrl: function($element, $attrs, $log){
      var url = '/app/components/music-player/';
      if($attrs.lite){
        return url+'music-player-lite.html';
      }else{
        return url+'music-player.html';
      }
    },
    controller: MusicPlayerController
  });


  /** @ngInject */

  function MusicPlayerController(musicPlayerFactory, $scope, $state){
    var vm = this;
    vm.musicPlayer = musicPlayerFactory;

    /*
    0
album_name
:
"Desi Boyz"
artist_name
:
"Sonu Nigam, Shilpa Rao"
coverArtHR
:
null
coverArtLR
:
null
duration
:
"00:03:48"
genre_name
:
"genre"
isCuedSong
:
0
isCurrentSong
:
1
isSongPresentOnMaster
:
null
liked
:
0
program_item_id
:
0
releaseId
:
null
song_action_id
:
0
song_dedicates
:
0
song_disc_count
:
0
song_id
:
43108
song_like
:
0
song_lyrics
:
null
song_name
:
"Allah Maaf Kare"
song_requests
:
0
*/



    function init(){



    }

    init();

  }
})();
