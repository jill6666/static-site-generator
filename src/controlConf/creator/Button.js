import { BoxModel, Nameable, Size } from "../store/schema";

const schema = {
  ...Nameable,
  text: { type: "Text", label: "Button Text" },
  twStyle: { type: "Text", label: "Button Style (tailwind)" },
  variant: {
    type: "Radio",
    label: "",
    control: [
      { label: "Default", value: "default" },
      { label: "Destructive", value: "destructive" },
      { label: "Outline", value: "outline" },
      { label: "Secondary", value: "secondary" },
      { label: "Ghost", value: "ghost" },
      { label: "Link", value: "link" },
    ],
  },
  size: {
    type: "Radio",
    label: "",
    control: [
      { label: "Default", value: "default" },
      { label: "Small", value: "sm" },
      { label: "Large", value: "lg" },
    ],
  },
  color: { type: "Color", label: "Text Color" },
  background: { type: "Color", label: "Button Background Color" },
  ...Size,
  ...BoxModel,
};

export default schema;
