import { BoxModel, Nameable, Size } from '../store/schema';

const schema = {
  ...Nameable,
  ...Size,
  title: { type: 'Input', label: 'Card Title' },
  description: { type: 'Input', label: 'Card Description' },
  cardContent: { type: 'Input', label: 'Card Content' },
  titleColor: { type: 'Color', label: 'Text Color' },
  descriptionColor: { type: 'Color', label: 'Description Color' },
  twStyle: { type: 'Input', label: 'Card Style (tailwind)' },
  ...BoxModel,
  background: { type: 'Color', label: 'Background Color' },
};

export const defaultValues = {
  name: 'Card',
  height: 'auto',
  width: 'auto',
  padding: '4px 4px 4px 4px',
  margin: '',
  border: '',
  borderRadius: '15px',
  twStyle: '',
  title: 'Card Title',
  description: 'Card Description',
  cardContent: 'Card Content',
  titleColor: '#333',
  descriptionColor: '#555',
  background: 'white',
};

export default schema;
