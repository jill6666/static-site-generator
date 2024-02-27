import { BoxModel, Nameable, Size } from "../store/schema";

const schema = {
  ...Nameable,
  ...Size,
  title: { type: "Input", label: "Card Title" },
  description: { type: "Input", label: "Card Description" },
  cardContent: { type: "Input", label: "Card Content" },
  titleColor: { type: "Color", label: "Text Color" },
  descriptionColor: { type: "Color", label: "Text Color" },
  twStyle: { type: "Input", label: "Card Style (tailwind)" },
  ...BoxModel,
  backgroundColor: { type: "Color", label: "Background Color" },
};

export default schema;
