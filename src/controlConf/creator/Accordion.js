import { BoxModel, Nameable, Size } from "../store/schema";

const schema = {
  ...Nameable,
  ...Size,
  ...BoxModel,
  twStyle: { type: "Text", label: "Button Style (tailwind)" },
  backgroundColor: { type: "Color", label: "Background Color" },
  triggerColor: { type: "Color", label: "Trigger Color" },
  contentColor: { type: "Color", label: "Content Color" },
  items: {
    type: "Repeater",
    label: "Accordion Content",
    control: {
      trigger: { type: "Text", label: "Trigger" },
      content: { type: "Text", label: "Content" },
    },
  },
};

export default schema;
