function AppRoutes ($stateProvider) {
  $stateProvider.state('view1', {
    url: '/',
    views: {
      'main': ''
    }
  };
  $locationProvider.html5Mode(true);
}
AppRoutes.$inject = ['$stateProvider', '$locationProvider'];
export { AppRoutes };
