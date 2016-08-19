(function(){
	angular
		.module('c4dWebsite')
		.controller('contactCtrl', ContactController);

		ContactController.$inject = ['webMetrics'];

	function ContactController(webMetrics) {
		var vm = this;
		vm.webMetrics = webMetrics;
	};
})();