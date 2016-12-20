(function(){
  'use strict';

  angular.module('muze')
  .controller('LocationSelectionDialogController', LocationSelectionDialogController)
  .component('locationSelector',{
    bindings: {
      props: '='
    },
    templateUrl: '/app/components/dialog/location-selection/location-selection.html',
    controller: LocationSelectionDialogController
  });

  /** @ngInject */
  function LocationSelectionDialogController(locationService,$state){
    var vm = this;
    vm.component = 'Location Selection';
    vm.selectedCity = '';
    vm.updateCity = updateCity;
    vm.closeModal = closeModal;

    function updateCity(){
      locationService.saveLocationLocal(vm.selectedCity)
      .then(function(response){
        vm.citySelected = true;

        // now that we have city, let's get venue data
        locationService.getVenueList()
        .then(function(data){
          // later on show venues to user, but right now save it and set it default
          locationService.saveVenueList(data.venues);
          vm.hasVenues = true;
        });
      }, function(err){
      });
    }

    function closeModal(){
      $state.go('home',{}, { reload: true });
    }

    function init(){

        //check if we already have a city
        var selectedCity = locationService.getSavedLocationLocal();
        if(selectedCity){
          vm.selectedCity = selectedCity;
          vm.citySelected = true;
        }

        //get location
        locationService.getLocationListing()
        .then(function(response){
          vm.cities = response.cities;
        });


    }

    init();
  }

})();
