     function initMap() {
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 14,
            center: {
                lat: 50.11965404079257,  
                lng: 8.663006717928539
            }
        });

        var locations = [
        [`<h6 class="popup-header">Frankfurter Golf Club e.V.</h6> <p class="popup-content"> Price: €110 </br> Distance from City Centre <strong>5.3km <i class="fas fa-golf-ball" aria-hidden="true"></i></strong></p>
        <a class="popup-link" href="https://goo.gl/maps/TxpUp2dAHLrnffie9" target="_blank"> Get directions</a>`, 50.07436072207846, 8.634940082778794 ],
        [`<h6 class="popup-header">Golf-Club Hof Hausen vor der Sonne e.V.</h6> <p class="popup-content"> Price: €90 </br> Distance from City Centre <strong>16km <i class="fas fa-golf-ball" aria-hidden="true"></i></strong></p>
        <a class="popup-link" href="https://goo.gl/maps/HdL3hgEXyzvvAbQi8" target="_blank"> Get directions</a>`, 50.11363566002675, 8.45990218463149 ],
         [`<h6 class="popup-header">Golf- und Land-Club Kronberg e.V.</h6> <p class="popup-content"> Price: €95 </br> Distance from City Centre <strong>15km <i class="fas fa-golf-ball" aria-hidden="true"></i></strong></p>
        <a class="popup-link" href="https://goo.gl/maps/5rKNfametEz5HAJT7" target="_blank"> Get directions</a>`, 50.1891297174854, 8.510156025111467 ]
];

//Zoom a location by clicking on external button
$(".location-button").click(function() {
  map.setCenter(new google.maps.LatLng(this.dataset.lat, this.dataset.lng));
  map.setZoom(15);
  });  

  let infowindow = new google.maps.InfoWindow({});

//Add markers on map according the information in locations array
  let marker, count;
  let bounds = new google.maps.LatLngBounds();
  for (count = 0; count<locations.length; count++) {
       marker = new google.maps.Marker ({
       position: new google.maps.LatLng(locations[count][1], locations[count][2]),
       map: map,
       animation: google.maps.Animation.DROP
  });

bounds.extend(marker.getPosition());

//Pop up an infowindow after clicking on marker
google.maps.event.addListener(marker, 'click', (function (marker, count) {
      return function () {
        infowindow.setContent(locations[count][0]);
        infowindow.open(map, marker);
      }
    })(marker, count));
  }
map.fitBounds(bounds);
  
}
