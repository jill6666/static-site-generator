import { Button as ButtonMarkup } from "./markup";

const Button = ({
  name,
  text = "",
  twStyle = "",
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
      {text}
    </ButtonMarkup>
  );
};
export default Button;
