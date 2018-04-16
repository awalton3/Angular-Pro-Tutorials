function CheckoutController () {
    
    this.details = {
        
        username: '', 
        password: '',
        coupon: 'SUMMER_50'
        
    };  
    
    this.onSubmit = function() {
        
       console.log(this.details); 
    };
    
} 

angular 
    .module('app')
    .controller('CheckoutController', CheckoutController) 