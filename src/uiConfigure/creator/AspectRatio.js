import { Nameable } from '../store/schema';

const schema = {
  ...Nameable,
  twStyle: { type: 'Input', label: 'Style (tailwind)' },
  imgUrl: { type: 'Image', label: 'Image' },
  ratio: {
    type: 'Radio',
    label: 'Ratio',
    control: [
      { label: '21:9', value: [21, 9] },
      { label: '16:9', value: [16, 9] },
      { label: '4:3', value: [4, 3] },
      { label: '1:1', value: [1, 1] },
    ],
  },
};

export const defaultValues = {
  name: 'AspectRatio',
  twStyle: 'rounded-md shadow-md',
  imgUrl: 'https://cataas.com/cat',
  ratio: [16, 9],
};

export default schema;
