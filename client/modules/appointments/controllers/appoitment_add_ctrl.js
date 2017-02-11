class controller {
    constructor($scope, toaster, $state, appointmentServ) {
        console.log(':::::::::::: This is dashboard controller :::::::::::::::');
        this.scope = $scope;
        this.toaster = toaster;
        this.state = $state;
        this.scope.org = {};
        this.scope.breadcrumDs  = this.buildBreadCrumDS();
        this.appointmentServ    = appointmentServ;
        this.scope.appointment  = {"slotStartTime":"06:15 PM","slotEndTime":"06:15 PM","fname":"raju","phone":"9105555377","lname":"nimmareddy","email":"raju.nimmareddy@gmail.com","reference":"Dr.Veera","address":"Sarjapura","city":"Bangalore","state":"Karnataka","doctor":{"id":24151,"firstName":"Cameron","lastName":"D'Amore","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/wake_gs/128.jpg","email":"Mathew.Heller@gmail.com","phone":"764.630.9462 x683","doj":"2017-02-05T20:40:06.085Z"},"moreDetails":"This is my first appointment","scheduleDate":"02/13/2017"};
        this.init();
    }
    
    init(){
        this.appointmentServ.getAllDoctorsPerOrg(12).then((response) => {
            this.scope.org.doctors = response.data;
            console.log(this.scope.org.doctors);
        });
        
        this.scope.onAppointmentUpdate = () =>{
            console.log('::::::::::::> onAppointmentUpdate <::::::::::::::');
            console.log(JSON.stringify(this.scope.appointment));
            this.toaster.pop('success', "Status", "Appointment Successfully Created");
            this.state.go('appointment');
        };
    }
    
    buildBreadCrumDS(){
        
        return {
            title:'Appointment',
            version:'Version 1.0.0',
            path:[
                {name:'Home', iconSrc:'fa-home'},
                {name:'Dashboard', iconSrc:'fa-tachometer', link:'appointment'},
                {name:'Add Appointment', iconSrc:'fa-plus'}
            ]
        }
        
    }
}

controller.$inject = ['$scope', 'toaster', '$state', 'appointmentServ'];
export default controller;