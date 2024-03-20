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
  width,
  height,
  padding,
  margin,
  border,
  borderRadius,
  isLoading,
  ...props
}) => {
  return (
    <ButtonMarkup
      size={size}
      variant={variant}
      className={twStyle}
      style={{
        color,
        background,
        width,
        height,
        padding,
        margin,
        border,
        borderRadius,
      }}
      {...props}
    >
      {isLoading ? <ReloadIcon className="animate-spin" /> : text}
    </ButtonMarkup>
  );
};
export default Button;
