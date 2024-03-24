import { BoxModel, Nameable, Size } from '../store/schema';

const schema = {
  ...Nameable,
  text: { type: 'Input', label: 'Text' },
  ownerAddr: { type: 'Input', label: 'Account Address', placeholder: 'Start with 0x' },
  twStyle: { type: 'Input', label: 'Style (tailwind)' },
  variant: {
    type: 'Radio',
    label: 'Style',
    control: [
      { label: 'Default', value: 'default' },
      { label: 'Destructive', value: 'destructive' },
      { label: 'Outline', value: 'outline' },
      { label: 'Secondary', value: 'secondary' },
      { label: 'Ghost', value: 'ghost' },
      { label: 'Link', value: 'link' },
    ],
  },
  size: {
    type: 'Radio',
    label: 'Size',
    control: [
      { label: 'Default', value: 'default' },
      { label: 'Small', value: 'sm' },
      { label: 'Large', value: 'lg' },
    ],
  },
  color: { type: 'Color', label: 'Text Color' },
  background: { type: 'Color', label: 'Background Color' },
  ...Size,
  ...BoxModel,
};

export default schema;
