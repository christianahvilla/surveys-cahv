export const getFullAddress = (latitude: number, longitude: number) => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 'OK' && data.results[0]) {
        const addressComponents = data.results[0].address_components;
        const formattedAddress = data.results[0].formatted_address;

        // Access the components you need (e.g., city, state, etc.) from addressComponents
        console.log('Formatted Address:', formattedAddress);
      } else {
        console.error('Geocoding API request failed.', data);
      }
    })
    .catch((error) => {
      console.error('Error fetching address:', error);
    });
};
