import { useState, useEffect } from 'react';
import { APIProvider, Map as MapMarkup, Marker } from '@vis.gl/react-google-maps';

const Map = ({
  positions = [],
  defaultCenter,
  defaultZoom,
  twStyle,
  height = '300px',
  width,
  waterColor = '#BBE2EC',
  landscapeColor = '#CDFADB',
  apiKey,
}) => {
  const [key, setKey] = useState('');

  useEffect(() => {
    setKey(apiKey);
  }, [apiKey]);

  const mapStyles = [
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: waterColor }],
    },
    {
      featureType: 'landscape',
      elementType: 'geometry',
      stylers: [{ color: landscapeColor }],
    },
    {
      // 商家標示
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }],
    },
  ];

  return (
    <>
      {key && (
        <APIProvider apiKey={key}>
          <div style={{ height, width }} className={twStyle}>
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
                positions.map((position, idx) => <Marker key={JSON.stringify(position) + idx} position={position} />)}
            </MapMarkup>
          </div>
        </APIProvider>
      )}
    </>
  );
};

export default Map;
