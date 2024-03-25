import { BoxModel, Nameable, Size } from '../store/schema';

const schema = {
  ...Nameable,
  ...Size,
  title: { type: 'Input', label: 'Card Title' },
  description: { type: 'Input', label: 'Card Description' },
  cardContent: { type: 'Input', label: 'Card Content' },
  titleColor: { type: 'Color', label: 'Text Color' },
  descriptionColor: { type: 'Color', label: 'Text Color' },
  twStyle: { type: 'Input', label: 'Card Style (tailwind)' },
  ...BoxModel,
  backgroundColor: { type: 'Color', label: 'Background Color' },
};

export const defaultValues = {
  name: 'Card',
  height: 'auto',
  width: 'auto',
  padding: '4px 4px 4px 4px',
  margin: '',
  border: '',
  borderRadius: '',
  twStyle: 'bg-gray-100 border border-gray-200 p-4 rounded-md shadow-md',
  title: 'Card Title',
  description: 'Card Description',
  cardContent: 'Card Content',
  titleColor: '#333',
  descriptionColor: '#555',
  backgroundColor: 'white',
};

export default schema;
