(function(){
	angular
		.module('c4dWebsite')
		.controller('homeCtrl', HomeController);

		HomeController.$inject = ['webMetrics', 'DataService'];

	function HomeController(webMetrics, DataService) {
		var vm = this;
		vm.webMetrics = webMetrics;
		vm.dataService = DataService;
	};
})();