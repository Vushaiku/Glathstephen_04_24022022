// Initialize and add the map
function initMap()
{
    // The location of Uluru
    // 45.769668654516764, 4.830151793709206
    const uluru = { lat: 45.769, lng: 4.830 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
}