import { Button as ButtonMarkup } from './markup';
import { ReloadIcon } from '@radix-ui/react-icons';

const Button = ({
  name,
  text = '',
  twStyle = '',
  variant,
  size,
  color,
  background,
  padding,
  margin,
  border,
  borderRadius,
  isLoading,
  ...props
}) => {
  return (
    <ButtonMarkup size={size} variant={variant} className={twStyle} style={{ margin, borderRadius }} {...props}>
      {isLoading ? <ReloadIcon className="animate-spin" /> : text}
    </ButtonMarkup>
  );
};
export default Button;
