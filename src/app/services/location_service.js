(function(){
  'use strict';

  angular.module('muze')
  .service('locationService',LocationService);

  /** @ngInject */
  function LocationService(muzeApiService,$timeout,$q,$window, userDataFactory){

    var locationData, venueData;

    this.getLocationListing = function(){
      return muzeApiService.get({
        route:'/city/list_city',
        params:''
      });
    };

    this.getVenueList = function(){
      var date = new Date();
      var user_id = userDataFactory.getUserId();
      var city = locationData.city_id;
      var latitude = 0;
      var longitude =0;
      var params = '?latitude='+latitude+'&longitude='+longitude+'&count=0&currentDatetime='+date+'&user_id='+user_id+'&city='+city;
      return muzeApiService.get({
        route: '/categoryvenue/list_venue'+params,
        params: ''
      });
    };

    this.saveLocationLocal = function(city){
      var deferred = $q.defer();
      $timeout(function(){
        $window.localStorage['muze_city']= JSON.stringify(city);
        return city;
      },100)
      .then(function(data){

        //store city
        locationData = data;
        //resolve promise
        deferred.resolve(locationData);
      }, function(err){
        deferred.reject(err);
      });

      return deferred.promise;
    };

    this.saveVenueList = function(venues){
      $window.localStorage['venues'] = JSON.stringify(venues);
      venueData = venues;
    };

    this.getSavedLocationLocal = function(){
      return locationData;
    };

    this.getCityId = function(){
      return locationData.city_id;
    };

    this.getVenueId = function(venue){
      return venueData[venue].venue_id;
    };

    this.getCategoryId = function(venue){
      return venueData[venue].category_id;
    };

    this.getNZLocalTime = function(){
      var d = new Date();
      d = new Date(d.getTime() + (d.getTimezoneOffset() + 780) * 60000);

      d = d.toISOString();
      d = d.replace('T',' ').replace('Z','');

      return d;

    }

    function init(){
      if($window.localStorage['muze_city']){
        locationData = JSON.parse($window.localStorage['muze_city']);
      }

      //venue
      if($window.localStorage['venues']){
        venueData = JSON.parse($window.localStorage['venues']);
      }


    }

    init();

  }
})();
