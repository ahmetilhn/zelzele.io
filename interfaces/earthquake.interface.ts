interface EarthquakeInterface {
  ID: string;
  Date: string;
  Magnitude: number;
  Type: string;
  Latitude: string;
  Longitude: string;
  Depth: number;
  Region: {
    City: string;
    District: string;
  };
}

export default EarthquakeInterface;
