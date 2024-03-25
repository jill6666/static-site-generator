import { Nameable, BoxModel } from '../store/schema';

const schema = {
  ...Nameable,
  text: { type: 'Input', label: 'Text' },
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
  borderRadius: { ...BoxModel.borderRadius },
};

export const defaultValues = {
  name: 'Button',
  height: 'auto',
  width: 'auto',
  twStyle: '',
  text: 'Click',
  variant: 'default',
  size: 'default',
  borderRadius: '8px',
};

export default schema;
