define(['angular','./sharedService'],function(angular){	
	angular.module('module2',['sharedModule']).
	controller('controller2', ['$scope','$rootScope','sharedService', function($scope, $rootScope, msg){
		$scope.message2 = "this is controller 2 message";
		$scope.messageCount = 20;
		$scope.sharedMsgCount1 = msg.msgCount;
		$rootScope.$on('messag1ContIncreased', function(event, msgCount){
				console.log(msgCount);
				$scope.incrimentMsgCount();
		});

		$scope.$watch('msg', function(msgCount) {
			$scope.sharedMsgCount = msgCount;
		});

		$scope.incrimentMsgCount = function(){
			$scope.messageCount += 1;
		}
	}])
});