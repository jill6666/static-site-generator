import { BoxModel, Nameable, Size } from '../store/schema';

const schema = {
  ...Nameable,
  ...Size,
  ...BoxModel,
  twStyle: { type: 'Input', label: 'Style (tailwind)' },
  items: {
    type: 'Repeater',
    label: 'Content',
    control: {
      imgUrl: { type: 'Image', label: 'Image' },
      navigateTo: { type: 'Input', label: 'NavigateTo' },
    },
  },
};

export const defaultValues = {
  name: 'Carousel',
  height: 'auto',
  width: 'auto',
  padding: '4px 4px 4px 4px',
  margin: '',
  border: '',
  borderRadius: '',
  twStyle: '',
  items: [
    {
      imgUrl: 'https://cataas.com/cat',
      navigateTo: '',
    },
    {
      imgUrl: 'https://cataas.com/cat',
      navigateTo: '',
    },
    {
      imgUrl: 'https://cataas.com/cat',
      navigateTo: '',
    },
  ],
};

export default schema;
