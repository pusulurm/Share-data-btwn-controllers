define(['angular','./sharedService'],function(angular){
	angular.module('module1',['sharedModule']).
	controller('controller1', ['$scope','$rootScope','sharedService', function($scope,$rootScope,msg){
		$scope.message1 = "this is controller 1 message";
		$scope.messageCount = 10;
		$scope.sharedMsgCount = msg.msgCount;
		
		$scope.incrimentMsgCount = function(){
			$scope.messageCount += 1;
			$rootScope.$emit('messag1ContIncreased',$scope.messageCount);
		};
		$scope.incrimentSharedMsgCount = function(){
			msg.msgCount = msg.msgCount + 1;
		};
	}])
});