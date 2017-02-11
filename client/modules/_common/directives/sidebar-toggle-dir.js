function sidebarToggleDir() {
    return {
        link: function (scope, element, attrs, ctrl) {
            console.log(':::::::::::::::: sidebar-toggle-dir ::::::::::::::::');
            element.click(function(event){
                event.preventDefault();
                console.log("sidebar-toggle-dir.");
                $('body').toggleClass('sidebar-collapse');
            });
        }
    }
}

sidebarToggleDir.$inject = [];
export default sidebarToggleDir;
