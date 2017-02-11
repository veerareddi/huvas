class AppointmentServ {
	constructor($http) {
		this.$http = $http;
	}
	
	getAllDoctorsPerOrg(orgId){
	    console.log('::::::::::::: getAllDoctorsPerOrg orgId ::::> '+orgId);
	    let url = 'api/org/doctors/'+orgId;
		return this.callService(url);
	}
	
	callService(url) {
	    console.log('::::::::::> Call Service -- '+url);
		return this.$http.get(url).then(function (response) {
			return response;
		},function (error) {
			return error;
		});
	}
	
	static serviceFactory($http) {
		return new AppointmentServ($http);
	}
}

AppointmentServ.serviceFactory.$inject = ['$http'];

export default AppointmentServ.serviceFactory;
