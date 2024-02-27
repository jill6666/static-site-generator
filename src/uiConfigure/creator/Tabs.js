import { BoxModel, Nameable, Size, Typography } from "../store/schema";

const schema = {
  ...Nameable,
  ...Size,
  ...BoxModel,
  twStyle: { type: "Input", label: "Style (tailwind)" },
  tabColor: { type: "Color", label: "Tab Color" },
  contentColor: { type: "Color", label: "Content Color" },
  items: {
    type: "Repeater",
    label: "Tabs",
    control: {
      tab: { ...Typography },
      content: { type: "Input", label: "Content" },
    },
  },
};

export default schema;
