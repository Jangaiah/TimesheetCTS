'use strict';
angular.module("app",['ngAnimate','ngTouch','ngRoute']) //'ui.bootstrap',
.config(function($routeProvider, $locationProvider){
    $routeProvider
    .when('/home',{
        templateUrl:"views/home.html",
        controller:"homeCntrl as home"
    })
    .when('/entry',{
        templateUrl:"views/entry.html",
        controller:"entryCntrl as entry"
    })
    .when('/summary',{
        templateUrl:"views/summary.html",
        controller:"summaryCntrl as summary"
    })
    .otherwise({redirectTo: "/home"});
     $locationProvider.hashPrefix('');
})
.run(function($location,$rootScope){
    var load_elem = document.getElementById("loader");
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
        load_elem.style.display="block";
        if(!$rootScope.periodStartDate){
        if(next.templateUrl == "views/entry.html"){
            alert("Timesheet entry page is not accessible until you select a week at home page. Redirecting to home page");
            $location.path("/home");
        }else if(next.templateUrl == "views/summary.html"){            
                alert("Timesheet summary page is not accessible until you select a week at home page. Redirecting to home page");
                $location.path("/home");
            }
                
        } //alert("Page is redirecting to "+next.templateUrl);
    });
    $rootScope.$on( "$routeChangeSuccess",function(){
        setTimeout(function(){
            load_elem.style.display="none";
        },150);
    });
});
