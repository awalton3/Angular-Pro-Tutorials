/*Notes 

Theory: Architecture, components, and data flow


Modules - chuck of code that contains specific logic and can be dropped in other code, so in other words stand alone and can be used in other applications

Routing and Views - controls navigation for the user and creates the controllers and views

Controller - high level container to manage a particular view. info is passed between view and controller through $scope. 

Components - use this to declare new templates and bind/display controller properties. There can be nested components. 

Directives: bind to existing HTML and add new behaviour. 

*Components create templates and directives we bind to existing templates to add behavior 

Serives - containes business logic, non-View stuff, such as API request ---  communicating with backend 


Data FLow

Components talk to controller and controllers talk to services 


One way data flow 
child components cannot pass data back up to parent components unless you use event binding (data flows down)
event binding: child components can pass data to parent function and vice versus (data can flow back up with events)

Stateful, stateless, and routed components

Stateful: contains a controller and template. Receives data, uses controller to manipulate the data, then displays data through template

Stateful: communicates with services 

routed components: communicate with services and input is normally data within the component. */