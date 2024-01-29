var myVar = angular.module('myVar', ['ngRoute']);

myVar.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: 'app3/app/views/home.html'
        })
        .when('/directory', {
            templateUrl: 'app3/app/views/directory.html',
            controller: 'TekkenController'
        }).otherwise({
            redirectTo: '/home'
        });
    }]);




myVar.controller('TekkenController',['$scope', '$http', function($scope, $http){

    $scope.removeCharacter = function(character){

        var  removeCharacter = $scope.characters.indexOf(character);
        $scope.characters.splice(removeCharacter, 1) ; 
    }

    $scope.addCharacter = function(){
        $scope.characters.push({
            name: $scope.yournewCharacter.name,
            belt: $scope.yournewCharacter.belt,
            wins: parseInt($scope.yournewCharacter.wins),
            available: true

        });

    $scope.yournewCharacter.name="";
    $scope.yournewCharacter.belt="";
    $scope.yournewCharacter.wins="";



    };
    $http.get('app3/app/data/players.json').then(function onSuccess(response) {
        var data = response.data;
        var status = response.status;
        var headers = response.headers;
        var config = response.config;   
        $scope.characters = data;
    })
    .catch(function(error) {
        // Handle error
    });

    /*
    $http.get('app3/app/data/players.json').success(function(data){
        $scope.characters = data;
    });

    $http.get('app3/app/data/players.json').then(function onSuccess(response) {
        $scope.characters = response;
    });
    
    $http.get('app3/app/data/players.json').subscribe(function(response) {
        $scope.characters = response;

    $http.get('app3/app/data/players.json').do(data => $scope.characters = data); 

    });
    */





    /*
    $scope.characters = [

        {
            name:"Rojer Federer",
            belt: "red",
            wins:50,
            available: true,
            thumb:"app3/app/images/rojer.png"

        },
        {
            name:"Rafael Nadal",
            belt: "orange",
            wins:80,
            available: false,
            thumb:"app3/app/images/nadal-head-2022.png"


        },
        {
            name:"Novak Djokovic",
            belt: "blue",
            wins:60,
            available: true,
            thumb:"app3/app/images/djokovic_head_ao19.png"



        },
        {
            name:"Dominic Theim",
            belt: "red",
            wins:40,
            available: true,
            thumb:"app3/app/images/thiem-head-2022.png"



        },
        {
            name:"Saad Ahmed Jamal",
            belt: "green",
            wins:2,
            available: true,
            thumb:"app3/app/images/saad-min.png"



        },
        {
            name:"Aisam ul Haq",
            belt: "green",
            wins:10,
            available: true,
            thumb:"app3/app/images/qureshi-headshot-15.png"



        }


    ];

    console.log(angular.toJson($scope.characters));
    */






}]);