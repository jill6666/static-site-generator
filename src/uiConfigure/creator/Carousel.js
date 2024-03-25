import { Nameable } from '../store/schema';

const schema = {
  ...Nameable,
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
