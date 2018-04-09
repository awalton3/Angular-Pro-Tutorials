var counter = {
    
    bindings: {
        
        count: '='
    },
    
    controller: function () {
        
      this.increment = function() {
          this.count++;
      };  
        
      this.decrement = function () {
        
          this.count--; 
      };    
    }, 
    
    template: `

        <div class="todo">
            <button type="button" ng-click="$ctrl.counter.decrement">
            <input type="text" ng-model="$ctrl.counter.count">
            <button type="button" ng-click="$ctrl.counter.increment">
        </div>
        `  
};
angular 
    .module('app')
    .component('counter', counter); 