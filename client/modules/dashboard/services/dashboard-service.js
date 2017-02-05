class DashboardService {
	constructor($http) {
		this.$http = $http;
	}
	
	callService(url) {
		return this.$http.get(url).success(function (data) {
			return data;
		}).error(function (data) {
			return data;
		});
	}

	static serviceFactory($http) {
		return new DashboardService($http);
	}
}

DashboardService.serviceFactory.$inject = ['$http'];

export default DashboardService.serviceFactory;