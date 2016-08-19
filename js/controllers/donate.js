(function(){
	angular
		.module('c4dWebsite')
		.controller('donateCtrl', DonateController);

		DonateController.$inject = ['webMetrics'];

	function DonateController(webMetrics) {
		var vm = this;
		vm.webMetrics = webMetrics;
	};
})();