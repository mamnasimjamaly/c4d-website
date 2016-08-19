
(function(){
	angular
		.module('c4dWebsite')
		.controller('howItWorksCtrl', HowItWorksController);

		HowItWorksController.$inject = ['webMetrics'];

	function HowItWorksController(webMetrics) {
		var vm = this;
		vm.webMetrics = webMetrics;
	};
})();