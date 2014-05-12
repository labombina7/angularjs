function formController($scope){

	$scope.storedInfo = {};

	$scope.form = {};

	$scope.restore = function(form){

	}

	$scope.submit = function(form){
		$scope.storedInfo = angular.copy(form);
	}

}