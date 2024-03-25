import { Nameable } from '../store/schema';

const schema = {
  ...Nameable,
  ownerAddr: { type: 'Input', label: 'Account Address', placeholder: 'Start with 0x' },
  darkMode: { type: 'Switch', label: 'Dark Mode' },
  title: { type: 'Input', label: 'Title' },
  description: { type: 'Input', label: 'Description' },
  titleColor: { type: 'Color', label: 'Title Color' },
  background: { type: 'Color', label: 'Background Color' },
  buttonColor: { type: 'Color', label: 'Button Color' },
  buttonBackground: { type: 'Color', label: 'Button Background' },
  buttonBorder: { type: 'Input', label: 'Button Border' },
};

export const defaultValues = {
  name: 'BuyMeACoffee',
  ownerAddr: '',
  darkMode: true,
  title: 'Buy Me A Coffee',
  description: 'Thank you for supporting me! 🙏',
  titleColor: '',
  background: '',
  buttonColor: '#555',
  buttonBackground: '#eee',
  buttonBorder: '1px solid #555',
};

export default schema;
