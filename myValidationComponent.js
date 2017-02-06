myApp.component('myForm', {
	templateUrl: 'input.html',
	controller: function formCtrl() {
		this.$onInit = function() {
			// console.log(this.forms);
		}

		this.formValidate = function(myForm) {
			// when a form was $dirty
			if (angular.isDefined(myForm)) {
				if (myForm.$valid) {
					alert('Yepppp Pass all validate');
				} else {
					if (angular.isObject(myForm['$error'])) {
						// if (myForm['$error'].length > 0) {	// has error key at least one
							for(var prop in myForm['$error']) {
								console.log(prop);
							}
							console.log(myForm['$error']);
							console.log(Object.keys(myForm['$error']).length);
						// }
					}
				}
			}
		}
	},
	bindings: {
		forms: '=',
		submitBtn: '&'
	}
});
