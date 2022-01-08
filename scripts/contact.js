function initMap() {
    var op = {lat: -35.23072311996233, lng: 173.94556965543384};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 9,
      center: op
    });
    var marker = new google.maps.Marker({
      position: op,
      map: map
    });
  }