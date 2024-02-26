import {
  APIProvider,
  Map as MapMarkup,
  Marker,
} from "@vis.gl/react-google-maps";

const Map = ({ positions = [], defaultCenter, defaultZoom }) => {
  return (
    <APIProvider apiKey={process.env.REACT_APP_API_KEY}>
      <div style={{ width: "100%", height: "300px" }}>
        <MapMarkup
          defaultCenter={defaultCenter}
          defaultZoom={defaultZoom}
          styles={mapStyles}
          mapTypeControl={false}
          streetViewControl={false}
          scrollwheel={false}
          fullscreenControl={false}
        >
          {Boolean(positions.length) &&
            positions.map((position) => (
              <Marker key={JSON.stringify(position)} position={position} />
            ))}
        </MapMarkup>
      </div>
    </APIProvider>
  );
};

export default Map;

const mapStyles = [
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#BBE2EC" }],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{ color: "#CDFADB" }],
  },
  {
    // 商家標示
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
];
