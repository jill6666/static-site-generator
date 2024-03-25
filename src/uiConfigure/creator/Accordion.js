import { BoxModel, Nameable, Size } from '../store/schema';

const schema = {
  ...Nameable,
  ...Size,
  ...BoxModel,
  twStyle: { type: 'Input', label: 'Style (tailwind)' },
  triggerColor: { type: 'Color', label: 'Trigger Color' },
  contentColor: { type: 'Color', label: 'Content Color' },
  items: {
    type: 'Repeater',
    label: 'Accordion Content',
    control: {
      trigger: { type: 'Input', label: 'Trigger' },
      content: { type: 'Input', label: 'Content' },
    },
  },
};

export const defaultValues = {
  name: 'Accordion',
  height: 'auto',
  width: 'auto',
  padding: '4px 4px 4px 4px',
  margin: '',
  border: '',
  borderRadius: '',
  twStyle: '',
  triggerColor: 'teal',
  contentColor: '#555',
  items: [
    {
      content:
        'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
      tab: {
        fontSize: '14px',
        text: 'Progress',
      },
    },
    {
      content: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
      tab: {
        fontSize: '14px',
        text: 'Tabs',
      },
    },
  ],
};

export default schema;
