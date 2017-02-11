class controller {
    
    constructor($scope, appointmentServ) {
        console.log(':::::::::::: This is Appointment Dashboard controller :::::::::::::::');
        this.scope = $scope;
        this.scope.breadcrumDs  = this.buildBreadCrumDS();
        this.appointmentServ    = appointmentServ;
        this.scope.org = {};
        this.init();
    }
    
    init(){
        this.appointmentServ.getAllDoctorsPerOrg(12).then((response) => {
            this.scope.org.doctors = response.data;
        });
        console.log('::::::::::::: Org Doctors Details ::::::::::::');
        console.log(this.scope.org.doctors);
    }
    
    buildBreadCrumDS(){
        
        return {
            title:'Dashboard',
            version:'Version 1.0.0',
            path:[
                {name:'Home', iconSrc:'fa-home'},
                {name:'Dashboard', iconSrc:'fa-tachometer'}
            ]
        }
        
    }
}

controller.$inject = ['$scope', 'appointmentServ'];
export default controller;