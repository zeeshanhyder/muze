angular
  .module('muze')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'app',
      resolve: {
        city: ["locationService", function(locationService) {
          var locationData = locationService.getSavedLocationLocal();

          return locationData;
        }]
      }
    })
    .state('location-selection',{
      url: '/location-selection',
      component: 'locationSelector'
    });
}
