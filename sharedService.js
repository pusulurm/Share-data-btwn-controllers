define(['angular'],function(angular){	
	angular.module('sharedModule',[]).
	factory('sharedService', function(){

		var msg = {
			msgCount : 5
		};
		
		return  msg;
	})
});