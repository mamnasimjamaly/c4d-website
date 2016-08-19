(function(){
	angular
		.module('c4dWebsite')
		.controller('navCtrl', HomeController);

		HomeController.$inject = ['webMetrics'];

	function HomeController(webMetrics) {
		var vm = this;
		vm.webMetrics = webMetrics;
		vm.activateSection = activateSection;

		function activateSection(section){
			webMetrics.reset();
			webMetrics.changeState(section,true);
		} 
	};
})();