(function(){
	angular
		.module("c4dWebsite")
		.factory("webMetrics" , WebMetrics);

		function WebMetrics() {
			var WebsiteObj = {
				homeActive			: true,
				howItWorksActive	: false,
				donateActive		: false,
				locationsActive 	: false,
				contactActive		: false,
				contactFormData		: contactFormData,
				pickupFormData		: pickupFormData,
				changeState			: changeState,
				reset				: reset
				
			};
			return WebsiteObj;

			function changeState(metric, state) {
				reset();
				if(metric == "home") {
					WebsiteObj.homeActive = state;
				} else if (metric === "howItWorks") {
					WebsiteObj.howItWorksActive = state;
				} else if (metric === "donate") {
					WebsiteObj.donateActive = state;
				} else if (metric === "locations") {
					WebsiteObj.locationsActive = state;
				} else if (metric === "contact") {
					WebsiteObj.contactActive = state;
				} else {
					return false;
				}
				
			}

			function reset() {
				WebsiteObj.homeActive = false;
				WebsiteObj.howItWorksActive = false;
				WebsiteObj.donateActive = false;
				WebsiteObj.locationsActive = false;
				WebsiteObj.contactActive = false;
			}

			var contactFormData = {
				name 	: "",
				email	: "",
				message : ""
			};
			var pickupFormData = {
				name 	: "",
				phone	: "",
				message : ""
			};
		}
})();			