(function(){
	angular
	.module('c4dWebsite')
	.controller('locationsCtrl', LocationsController);

	LocationsController.$inject = ['webMetrics'];

	function LocationsController(webMetrics) {
		var vm = this;
		vm.webMetrics = webMetrics;
		vm.getMap = getMap;
		vm.areas = areas;  

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
              	for (i = 0; i < areas.length; i++){
                  createMarker(areas[i],currChar);
                  areas[i]["pointerChar"] = currChar;
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