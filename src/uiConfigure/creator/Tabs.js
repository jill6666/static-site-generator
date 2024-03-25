import { BoxModel, Nameable, Typography } from '../store/schema';

const schema = {
  ...Nameable,
  ...BoxModel,
  darkMode: { type: 'Switch', label: 'Dark Mode' },
  items: {
    // TODO:
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
  padding: '4px 4px 4px 4px',
  margin: '',
  border: '',
  borderRadius: '',
  darkMode: true,
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
