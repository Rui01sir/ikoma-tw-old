import { useState, useEffect } from 'react';

function GoogleMap() {
  const [Map, setMap] = useState(null);

  function initMap() {
    const myLatLng1 = { lat: 24.926423, lng: 121.275311 };
    
    // 使用外部的 map 變量
    const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
      center: myLatLng1,
      zoom: 12,
      mapId: '9af7d4f7a18e39e',
    });

    new window.google.maps.Marker({
      position: myLatLng1,
      map: mapInstance,
      title: "IKOMA",
    });

    setMap(mapInstance);

    navigator.geolocation.getCurrentPosition(function(position){
      const currentPosition = {
        lat: 24.926423,
        lng: 121.275311,
      };
      mapInstance.setCenter(currentPosition);
      mapInstance.setZoom(15);
    });
  }

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDsHVQhtwOeRXDxJvqnbdBf9QZ5ZTyduBE&callback=initMap&v=weekly`;
    script.defer = true;
    script.async = true;

    window.initMap = initMap;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return( 
    <div id="map" style={{ width: '100%', height: '100%' }}>
    </div>
  );
}

export default GoogleMap;
