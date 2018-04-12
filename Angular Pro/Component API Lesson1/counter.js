// Refacturing custom directives into component architecture
// Only use custom directives when you are trying to manipulate the DOM

var counter = {
    
    //bindings are used to passed properties down one way data flow
    bindings: {
        count: '=' // two-way binding   
    }, 
    controller: function () {
	this.increment = function () {
		this.count++;
	};
	this.decrement = function () {
		this.count--;
	};
},
template: `
		<div class="todo">
			<button type="button" ng-click="$ctrl.decrement();">-</button>
			<input type="text" ng-model="$ctrl.count">
			<button type="button" ng-click="$ctrl.increment();">+</button>
		</div>
	` 
};

angular 
    .module('app')
    .component('counter', counter);
