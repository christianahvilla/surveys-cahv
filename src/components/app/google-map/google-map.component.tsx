import { useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { isNull } from 'lodash';
import { ICords, IGoogleMapComponent } from './types';
import { INITIAL_CENTER, MAP_CONTAINER_STYLE } from './constants';
import { LoadingElement } from '../loading/loading-element.component';
import { getFullAddress } from './helpers';

const GoogleMapComponent = ({ onLocationSelect }: IGoogleMapComponent) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [markerPosition, setMarkerPosition] = useState<ICords | null>(null);

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (isNull(event) || isNull(event.latLng)) {
      return;
    }

    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setMarkerPosition({ lat, lng });
    onLocationSelect({ lat, lng });
  };

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Now you have the coordinates (latitude and longitude)
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

        // Call a function to get the full address using these coordinates
        getFullAddress(latitude, longitude);
      },
      function (error) {
        // Handle errors (e.g., user denied permission)
        console.error('Error getting location:', error);
      },
    );
  } else {
    console.log('Geolocation is not available in this browser.');
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={MAP_CONTAINER_STYLE}
      center={INITIAL_CENTER} // Default center
      zoom={13} // Default zoom
      options={{ streetViewControl: false }}
      onClick={handleMapClick}
    >
      {markerPosition && <Marker position={markerPosition} />}
    </GoogleMap>
  ) : (
    <LoadingElement />
  );
};

export default GoogleMapComponent;
