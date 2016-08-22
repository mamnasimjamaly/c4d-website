(function(){
	angular
	.module('c4dWebsite')
	.controller('locationsCtrl', LocationsController);

	LocationsController.$inject = ['webMetrics', 'DataService'];

	function LocationsController(webMetrics , DataService) {
		var vm = this;
		vm.webMetrics = webMetrics;
		vm.getMap = getMap;
		vm.dataService = DataService;  

		function getMap() {
			function initialize() {
				var myLatlng = new google.maps.LatLng(49.2827291,-123.12073);
				var mapOptions = {
					zoom: 9,
					center: myLatlng,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				}

				var map = new google.maps.Map(document.getElementById('map'), mapOptions);
				//Callout Content

				//find next character
				function nextChar(char){
					return String.fromCharCode(char.charCodeAt(0) + 1);
				}
				//Add Marker
				function createMarker (info, char){                 
                  var marker = new google.maps.Marker({
                      map       : map,
                      position  : new google.maps.LatLng(info.lat, info.long),
                      title     : info.place,
                      icon      : "http://www.google.com/mapfiles/marker" + char + ".png" 
                  });                                  
              	}	  
              	
              	//now add all markers
              	var currChar = "A";
              	for (i = 0; i < vm.dataService.areas.length; i++){
                  createMarker(vm.dataService.areas[i],currChar);
                  vm.dataService.areas[i]["pointerChar"] = currChar;
                  currChar = nextChar(currChar);
              	}

				//Resize Function
				google.maps.event.addDomListener(window, "resize", function() {
					var center = map.getCenter();
					google.maps.event.trigger(map, "resize");
					map.setCenter(center);
				});

				google.maps.event.addListener(map, 'idle', function() {
    				console.log("from inside idle");
    				google.maps.event.trigger(map, 'resize');
				});

								
			}

			google.maps.event.addDomListener(window, 'load', initialize);

		}				
	};

})();