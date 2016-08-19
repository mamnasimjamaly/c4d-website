(function(){
	angular
		.module('c4dWebsite')
		.controller('locationsCtrl', LocationsController);

		LocationsController.$inject = ['webMetrics'];

	function LocationsController(webMetrics) {
		var vm = this;
		vm.webMetrics = webMetrics;
	};
})();