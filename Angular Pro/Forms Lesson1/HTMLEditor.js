function HTMLEditor() {
    return {
        
        require: 'ngModel', //gives us controller associated with model
        link: function($scope,$element, $attrs, $ctrl) {
            var NgModelCtrl = $ctrl; 
            //view to model
            $element.on('input', function(event) {  
                NgModelCtrl.$setViewValue(event.target.innerHTML);   
            });
            //model to view
            NgModelCtrl.$render = function () {
                $element.html(NgModelCtrl.$modelValue);  
            };
            NgModelCtrl.$setViewValue($element[0].innerHTML); 
        }
    };  
    
}

angular 
    .module('app')
    .directive('htmlEditor', HTMLEditor)