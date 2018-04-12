var statelessComponent = {
	bindings: {
		user: '<', // one-way data binding 
		onUpdate: '&' //delegation
	},
	controller: function () {
		this.$onChanges = function (changes) { // whenever user changes....
			if (changes.user) {
				this.user = angular.copy(this.user); // breaks binding between parent and child component 
			}
		};
		this.updateUser = function () {
			this.onUpdate({
				$event: {
					user: this.user
				}
			});
		};
	},
	template: `
		<div>
			<input type="text" ng-model="$ctrl.user.name">
			<input type="text" ng-model="$ctrl.user.location">
			<a href="" ng-click="$ctrl.updateUser();">Update</a>
		</div>
	`
};

angular
	.module('app')
	.component('statelessComponent', statelessComponent);