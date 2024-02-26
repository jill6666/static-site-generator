import {
  APIProvider,
  Map as MapMarkup,
  Marker,
} from "@vis.gl/react-google-maps";

const Map = ({
  positions = [],
  defaultCenter,
  defaultZoom,
  twStyle,
  height = "300px",
  width = "100%",
  padding,
  margin,
  border,
  borderRadius,
  waterColor = "#BBE2EC",
  landscapeColor = "#CDFADB",
}) => {
  const mapStyles = [
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: waterColor }],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ color: landscapeColor }],
    },
    {
      // 商家標示
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
  ];

  return (
    <APIProvider apiKey={process.env.REACT_APP_API_KEY}>
      <div
        style={{
          height,
          width,
          padding,
          margin,
          border,
          borderRadius,
        }}
        className={twStyle}
      >
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
