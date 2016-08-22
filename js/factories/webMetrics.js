(function(){
	angular
		.module("c4dWebsite")
		.factory("webMetrics" , WebMetrics);

	WebMetrics.$inject = ['DataService'];

		function WebMetrics(DataService) {
			var WebsiteObj = {
				homeActive			: true,
				howItWorksActive	: false,
				donateActive		: false,
				locationsActive 	: false,	
				contactActive		: false,
				errorPickupFrom		: false,
				errorOrderForm		: false,
				pickupReqSuccess	: false,
				dataService 		: DataService,
				changeState			: changeState,
				reset				: reset,
				clearPickupForm		: clearPickupForm,
				processPickupReq	: processPickupReq
				
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

			function clearPickupForm() {
				for(data in WebsiteObj.dataService.pickupFormData) {
					WebsiteObj.dataService.pickupFormData[data] = "";
				}
				WebsiteObj.errorPickupFrom = false;
				WebsiteObj.pickupReqSuccess = false;
			}

			function processPickupReq() {
				trimedData = {};

				for (data in WebsiteObj.dataService.pickupFormData) {
					trimedData[data] = $.trim(WebsiteObj.dataService.pickupFormData[data]);
				}

				for (data in trimedData) {
					if(trimedData[data] === "") {
						WebsiteObj.errorPickupFrom = true;
						return;
					}
				}

				WebsiteObj.pickupReqSuccess = true;
				WebsiteObj.errorPickupFrom = false; 
				//TODO : else send email
			}


			
		}
})();			