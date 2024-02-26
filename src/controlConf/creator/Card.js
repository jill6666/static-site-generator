import { BoxModel, Nameable, Size } from "../store/schema";

const schema = {
  ...Nameable,
  ...Size,
  title: { type: "Text", label: "Card Title" },
  description: { type: "Text", label: "Card Description" },
  cardContent: { type: "Text", label: "Card Content" },
  titleColor: { type: "Color", label: "Text Color" },
  descriptionColor: { type: "Color", label: "Text Color" },
  twStyle: { type: "Text", label: "Card Style (tailwind)" },
  ...BoxModel,
  backgroundColor: { type: "Color", label: "Background Color" },
};

export default schema;
