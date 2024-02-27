import { Nameable, Typography } from "../store/schema";

const schema = {
  ...Nameable,
  ...Typography,
  text: { type: "Input", label: "Content" },
  twStyle: { type: "Input", label: "Style (tailwind)" },
  textAlign: {
    type: "Radio",
    label: "Text Alignment",
    control: [
      { label: "Left", value: "left" },
      { label: "Center", value: "center" },
      { label: "Right", value: "right" },
    ],
  },
};

export default schema;
