import { BoxModel, Nameable, Size, Typography } from "../store/schema";

const schema = {
  ...Nameable,
  ...Size,
  ...BoxModel,
  backgroundColor: { type: "Color", label: "Background Color" },
  twStyle: { type: "Text", label: "Button Style (tailwind)" },
  tabColor: { type: "Color", label: "Tab Color" },
  contentColor: { type: "Color", label: "Content Color" },
  items: {
    type: "Repeater",
    label: "Tabs",
    control: {
      tab: { ...Typography },
      content: { type: "Text", label: "Content" },
    },
  },
};

export default schema;
