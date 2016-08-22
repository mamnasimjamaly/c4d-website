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
				formShowMessage		: false,
				formMessage			: "",
				dataService 		: DataService,
				changeState			: changeState,
				reset				: reset,
				clearForm			: clearForm,
				processSubmitReq	: processSubmitReq,
				goBackHome			: goBackHome
				
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
				WebsiteObj.formShowMessage = false;
				WebsiteObj.formMessage = "";
			}

			function clearForm(form) {
				for(data in form) {
					form[data] = "";
				}
				WebsiteObj.formShowMessage = false;
				WebsiteObj.formShowMessage = "";

			}

			function processSubmitReq(formData) {
				trimedData = {};

				for (data in formData) {
					trimedData[data] = $.trim(formData[data]);
				}

				for (data in trimedData) {
					if(trimedData[data] === "") {
						WebsiteObj.formShowMessage = true;
						WebsiteObj.formMessage = "Please fill up all fields";
						return;
					}
				}

				var promise = sendEmail(trimedData);
				var response = "1" ;
				promise.then(function(v) {
  					response = v[0]; 

				});
				if( response == "1") {
					WebsiteObj.formShowMessage = true;
					WebsiteObj.formMessage = "Message Sent";
				} else if (response == "0"){
					WebsiteObj.formShowMessage = true;
					WebsiteObj.formMessage = "Message Not Sent";
				} else {
					WebsiteObj.formShowMessage = true;
					WebsiteObj.formMessage = "Something went wrong";
				}

		}

		function sendEmail(formData) {
				
 			return Promise.resolve($.ajax({
      			type 	: "POST",
      			url		: "php/mail.php",
      			data 	: formData
  			}));
		}

		function goBackHome() {
			WebsiteObj.reset();
			WebsiteObj.homeActive = true;
			WebsiteObj.clearForm(WebsiteObj.dataService.contactFormData);
		}
			
	}
})();			