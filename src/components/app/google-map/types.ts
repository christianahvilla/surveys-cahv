export interface ICords {
  lat: number;
  lng: number;
}

// React.Dispatch<React.SetStateAction<ICords>>

export interface IGoogleMapComponent {
  onLocationSelect: (location: ICords) => void;
}
