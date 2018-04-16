function couponFormat () {
    
    return {
        
        require: 'ngModel',
        link: function ($scope, $elem, $attrs, $ctrl) {
            
            var ngModelCtrl = $ctrl;
            
            //manipulate value before it's returned (model to view)
            ngModelCtrl.$formatters.unshift(function (value) {
                return value.replace(/-/g, '_').toUpperCase()
            }); 
            
             //view to model
            ngModelCtrl.$parsers.unshift(function (value) {
                return value.replace(/_/g, '-').toLowerCase()
            }); 
            
            ngModelCtrl.$validators.coupon = function (modelValue, viewValue) {
                
                var COUPON_REGEX = /[A-Z]+\_\d{2}/; //view value
                return COUPON_REGEX.test(viewValue); 
                
            };
            
        }  
    }  
}

angular 
    .module('app')
    .directive('couponFormat', couponFormat)