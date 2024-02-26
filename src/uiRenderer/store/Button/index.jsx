import { Button as ButtonMarkup } from "./markup";

const Button = ({ text = "" }) => {
  return <ButtonMarkup>{text}</ButtonMarkup>;
};
export default Button;
