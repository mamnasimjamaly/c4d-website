(function(){
	angular
		.module('c4dWebsite')
		.controller('homeCtrl', HomeController);

		HomeController.$inject = ['webMetrics'];

	function HomeController(webMetrics) {
		var vm = this;
		vm.webMetrics = webMetrics;
	};
})();