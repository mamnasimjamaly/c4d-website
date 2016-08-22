(function(){
	angular
		.module('c4dWebsite')
		.factory('DataService', DataFactory);

	function DataFactory() {
		var dataObj = {
			contactFormData		: contactFormData,
			pickupFormData		: pickupFormData,
			areas				: areas
		};

		return dataObj;
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

	var areas = [
          {
              place : 'Vancouver',
              desc : 'A country of culture and tradition!',
              lat : 49.2827291,
              long : -123.12073
          },
          {
              place : 'Marpole',
              desc : 'Marpole Area',
              lat : 49.20677999999999,
              long : -123.13838950000002
          },
          {
              place : 'Kerrisdale',
              desc : 'Kerrisdale',
              lat : 49.2341326,
              long : -123.15535090000003
          },
          {
              place : 'Richmond',
              desc : 'Richmond',
              lat : 49.16658979999999,
              long : -123.13356899999997
            },
          {
              place : 'Kitsilano',
              desc : 'Kitsilano',
              lat : 49.250937,
              long : -123.16214200000002
          }
    ];
})();