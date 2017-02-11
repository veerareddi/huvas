
function dropdownToggleDirective() {
    return {
        link: function (scope, element) {
            console.log('::::::::::: I am dropdown toggle Directive :::::::::::');    
            element.click(function(event){
                event.preventDefault();
                console.log("dropdown-toggle-dir.");
            });
        }
    };
}


dropdownToggleDirective.$inject = [];
export default dropdownToggleDirective;