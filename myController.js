myApp.controller('myController', ['$scope', function ($scope) {
	$scope.formModel = [
		{
			type: 'text',
			name: 'firstname',
			required: true,
			disabled: false,
			pattern: '',
			placeholder: 'firstname',
			errorClass: 'x',
			errorMsg: 'This is required field',
			label: 'Firstname *',
			model: 'Teerapong'
		}, {
			type: 'text',
			name: 'lastname',
			required: true,
			disabled: true,
			pattern: '',
			placeholder: 'lastname',
			errorClass: 'x',
			errorMsg: 'This is required field',
			label: 'Lastname *',
			model: 'Singthong'
		}
	];
}]);

myApp.controller('formCtrl', ['$scope', function ($scope) {

}]);
