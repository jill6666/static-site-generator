import { BoxModel, Nameable, Size } from '../store/schema';

const schema = {
  ...Nameable,
  ...Size,
  ...BoxModel,
  apiKey: { type: 'Input', label: 'API Key for GoogleMap API' },
  twStyle: { type: 'Input', label: 'Style (tailwind)' },
  positions: {
    type: 'Repeater',
    label: 'Positions',
    control: {
      lat: { type: 'Input', label: 'Position Lat' },
      lng: { type: 'Input', label: 'Position Lng' },
    },
  },
  defaultCenter: {
    type: 'Group',
    label: 'Center',
    control: {
      lat: { type: 'Input', label: 'Position Lat' },
      lng: { type: 'Input', label: 'Position Lng' },
    },
  },
  defaultZoom: { tyep: 'Size', label: 'Zoom' },
  waterColor: { type: 'Color', label: 'Water Color' },
  landscapeColor: { type: 'Color', label: 'Landscape Color' },
};

export const defaultValues = {
  name: 'Map',
  height: 'auto',
  width: 'auto',
  padding: '4px 4px 4px 4px',
  margin: '',
  border: '',
  borderRadius: '',
  twStyle: '',
  apiKey: '',
  positions: [
    {
      lat: '37.7749',
      lng: '-122.4194',
    },
  ],
  defaultCenter: {
    lat: '37.7749',
    lng: '-122.4194',
  },
  defaultZoom: '8',
  waterColor: '#00FFFF',
  landscapeColor: '#00FF00',
};

export default schema;
