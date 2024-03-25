import { BoxModel, Nameable, Size } from '../store/schema';

const schema = {
  ...Nameable,
  ...Size,
  ...BoxModel,
  twStyle: { type: 'Input', label: 'Style (tailwind)' },
};

export const defaultValues = {
  name: 'Box',
  height: 'auto',
  width: 'auto',
  padding: '4px 4px 4px 4px',
  margin: '',
  border: '',
  borderRadius: '',
  twStyle: 'p-4',
};

export default schema;
