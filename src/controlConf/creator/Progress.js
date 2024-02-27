import { BoxModel, Nameable, Size } from "../store/schema";

const schema = {
  ...Nameable,
  ...Size,
  ...BoxModel,
  twStyle: { type: "Input", label: "Style (tailwind)" },
  value: { type: "Range", label: "Progress Value", min: 0, max: 100 },
};

export default schema;
