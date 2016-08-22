(function(){
	angular
		.module('c4dWebsite')
		.controller('contactCtrl', ContactController);

		ContactController.$inject = ['webMetrics','DataService'];

	function ContactController(webMetrics, DataService) {
		var vm = this;
		vm.webMetrics = webMetrics;
		vm.dataService = DataService;
	};
})();