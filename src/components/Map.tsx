import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const eWasteCenters = [
  { id: 1, name: "Green Earth Center", lat: 17.4, lng: 78.48 },
  { id: 2, name: "Recycle Hub", lat: 17.39, lng: 78.49 },
];

const Map = () => {
  const [currentPosition, setCurrentPosition] = useState<google.maps.LatLngLiteral | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDW6dZCBp1zY9Y6IfpZ0CYbpjAjcP5BJHQ', // Replace this
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          setCurrentPosition({
            lat: 17.385044,
            lng: 78.486671,
          }); // fallback to Hyderabad
        }
      );
    }
  }, []);

  if (!isLoaded) return <p>Loading map...</p>;

  return (
    <div className="w-full overflow-hidden rounded shadow">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentPosition || { lat: 17.385044, lng: 78.486671 }}
        zoom={13}
      >
        {/* Show user location */}
        {currentPosition && (
          <Marker
            position={currentPosition}
            label="You"
            icon={{
              url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            }}
          />
        )}

        {/* Show E-waste centers */}
        {eWasteCenters.map((center) => (
          <Marker
            key={center.id}
            position={{ lat: center.lat, lng: center.lng }}
            label={center.name}
            icon={{
              url: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default React.memo(Map);
