class LoginService {
    
	constructor($http) {
		this.$http = $http;
	}
	
	validateLoginDetails(user){
	    console.log(':::::::::::::::::: validateLoginDetails ::::::::::::::::::');
        return this.$http.post('/api/user/validate', {user:user});
	}
	
	callService(url) {
		return this.$http.get(url).success(function (data) {
			return data;
		}).error(function (data) {
			return data;
		});
	}
	
    static serviceFactory($http) {
		return new LoginService($http);
	}
}

LoginService.serviceFactory.$inject = ['$http'];

export default LoginService.serviceFactory;
