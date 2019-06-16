var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl: "'../app/server'"
    })
      .when("/event-list",{
        templateUrl: "'../app/server'"
    })
      .when("/highlighted-events",{
        templateUrl: "'../app/server'"
    })
      .when("/event-detail",{
        templateUrl: "'../app/server'"
    })
      .when("/new-event",{
        templateUrl: "'../app/server'"
    })
      .when("/share-event",{
        templateUrl: "'../app/server'"
    })
    .otherwise({redirectTo : '/'});
});