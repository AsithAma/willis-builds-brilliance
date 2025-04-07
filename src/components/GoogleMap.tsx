
import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    initMap: () => void;
    google: any; // Using any type to avoid TypeScript errors
  }
}

const GoogleMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap`;
    script.async = true;
    script.defer = true;
    
    // Define the initMap function globally
    window.initMap = function() {
      if (mapRef.current && window.google) {
        // Using coordinates for Willis Construction
        const location = { lat: 51.497, lng: -3.145 };
        
        const map = new window.google.maps.Map(mapRef.current, {
          center: location,
          zoom: 15,
          styles: [
            {
              "elementType": "geometry",
              "stylers": [{ "color": "#f5f5f5" }]
            },
            {
              "elementType": "labels.icon",
              "stylers": [{ "visibility": "off" }]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#616161" }]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [{ "color": "#f5f5f5" }]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#bdbdbd" }]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [{ "color": "#eeeeee" }]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#757575" }]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [{ "color": "#e5e5e5" }]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#9e9e9e" }]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [{ "color": "#ffffff" }]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#757575" }]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [{ "color": "#dadada" }]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#616161" }]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#9e9e9e" }]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [{ "color": "#e5e5e5" }]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [{ "color": "#eeeeee" }]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [{ "color": "#c9c9c9" }]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#9e9e9e" }]
            }
          ]
        });
        
        // Add a marker for Willis Construction
        const marker = new window.google.maps.Marker({
          position: location,
          map: map,
          title: 'Willis Construction Ltd',
          animation: window.google.maps.Animation.DROP
        });
        
        // Add an info window with the company address
        const infowindow = new window.google.maps.InfoWindow({
          content: `
            <div class="p-2">
              <h3 class="font-bold text-base mb-1">Willis Construction Ltd</h3>
              <p class="text-sm">Unit 1 River Bridge Business Centre, Rhymney River Bridge Road, Penylan, Cardiff, CF23 9FP</p>
            </div>
          `
        });
        
        marker.addListener('click', () => {
          infowindow.open(map, marker);
        });
        
        // Open info window by default
        infowindow.open(map, marker);
      }
    };
    
    // Append the script to the document
    document.head.appendChild(script);
    
    return () => {
      // Clean up
      document.head.removeChild(script);
      delete window.initMap;
    };
  }, []);

  return (
    <div className="relative">
      <div className="h-[500px] w-full" ref={mapRef}></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </div>
  );
};

export default GoogleMap;
