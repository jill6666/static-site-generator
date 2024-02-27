import { BoxModel, Nameable, Size } from "../store/schema";

const schema = {
  ...Nameable,
  ...Size,
  ...BoxModel,
  twStyle: { type: "Input", label: "Style (tailwind)" },
};

export default schema;
