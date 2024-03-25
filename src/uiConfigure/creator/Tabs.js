import { BoxModel, Nameable, Size, Typography } from '../store/schema';

const schema = {
  ...Nameable,
  ...Size,
  ...BoxModel,
  twStyle: { type: 'Input', label: 'Style (tailwind)' },
  tabColor: { type: 'Color', label: 'Tab Color' },
  contentColor: { type: 'Color', label: 'Content Color' },
  items: {
    type: 'Repeater',
    label: 'Tabs',
    control: {
      tab: { ...Typography },
      content: { type: 'Input', label: 'Content' },
    },
  },
};

export const defaultValues = {
  name: 'Tabs',
  height: 'auto',
  width: 'auto',
  padding: '4px 4px 4px 4px',
  margin: '',
  border: '',
  borderRadius: '',
  twStyle: '',
  tabColor: '#333',
  contentColor: '#555',
  items: [
    {
      content:
        'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
      tab: {
        fontSize: '14',
        text: 'Progress',
      },
    },
    {
      content: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
      tab: {
        fontSize: '14',
        text: 'Tabs',
      },
    },
  ],
};

export default schema;
