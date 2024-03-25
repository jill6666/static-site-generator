import { Nameable, Size } from '../store/schema';

const schema = {
  ...Nameable,
  ...Size,
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
  height: '350px',
  width: 'auto',
  twStyle: '',
  apiKey: '',
  positions: [
    {
      lat: 49.3006591,
      lng: -123.1308637,
    },
  ],
  defaultCenter: {
    lat: 49.3006591,
    lng: -123.1308637,
  },
  defaultZoom: 12,
  waterColor: '#BBE2EC',
  landscapeColor: '#CDFADB',
};

export default schema;
