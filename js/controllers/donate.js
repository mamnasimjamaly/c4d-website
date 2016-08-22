(function(){
	angular
		.module('c4dWebsite')
		.controller('donateCtrl', DonateController);

		DonateController.$inject = ['webMetrics', 'DataService'];

	function DonateController(webMetrics , DataService) {
		var vm = this;
		vm.webMetrics = webMetrics;
		vm.dataService = DataService;
	};
})();