import { BoxModel, Nameable, Size } from '../store/schema';

const schema = {
  ...Nameable,
  ...Size,
  ...BoxModel,
  twStyle: { type: 'Input', label: 'Style (tailwind)' },
  value: { type: 'Range', label: 'Progress Value', min: 0, max: 100 },
  background: { type: 'Color', label: 'Background Color' },
  color: { type: 'Color', label: 'Progress Color' },
};

export const defaultValues = {
  name: 'Progress',
  height: 'auto',
  width: 'auto',
  padding: '4px 4px 4px 4px',
  margin: '',
  border: '',
  borderRadius: '',
  twStyle: '',
  background: 'pink',
  color: 'teal',
  value: 50,
};

export default schema;
