import { BoxModel, Nameable, Size } from "../store/schema";

const schema = {
  ...Nameable,
  ...Size,
  ...BoxModel,
  twStyle: { type: "Input", label: "Style (tailwind)", props: {} },
  triggerColor: { type: "Color", label: "Trigger Color" },
  contentColor: { type: "Color", label: "Content Color" },
  items: {
    type: "Repeater",
    label: "Accordion Content",
    control: {
      trigger: { type: "Input", label: "Trigger" },
      content: { type: "Input", label: "Content" },
    },
  },
};

export default schema;
