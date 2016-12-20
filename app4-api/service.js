angular.module("apiApp").service("lukeServiceWalker", function($http){

 var baseUrl = 'http://swapi.co/'

 this.getLuke = function() {
   return $http({
     method: 'Get',
     url: baseUrl + 'api/people/1'

   })
 .then(function(response){
   return response.data;
 })


 }

})
