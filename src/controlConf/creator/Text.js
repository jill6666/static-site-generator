import { Nameable, Typography } from "../store/schema";

const schema = {
  ...Nameable,
  ...Typography,
  twStyle: { type: "Text", label: "Button Style (tailwind)" },
};

export default schema;
