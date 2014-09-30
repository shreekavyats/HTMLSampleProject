 angular.module('controllerEx', [])
   .controller('SettingsController', ['$scope', SettingsController]);

 function SettingsController($scope) {
   $scope.name = "Shreekavya T S";
   $scope.contacts = [
     {type:'phone', value:'408 555 1212'},
     {type:'email', value:'kavya.t@techeights.com'} ];

   $scope.greet = function() {
     alert($scope.name);
   };

   $scope.removeContact = function(contactToRemove) {
     var index = $scope.contacts.indexOf(contactToRemove);
     $scope.contacts.splice(index, 1);
   };

   $scope.clearContact = function(contact) {
     contact.type = 'phone';
     contact.value = '';
   };
 }