interface EarthquakeInterface {
  ID: string;
  Date: Date;
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
