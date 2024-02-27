import { BoxModel, Nameable, Size } from "../store/schema";

const schema = {
  ...Nameable,
  ...Size,
  ...BoxModel,
  twStyle: { type: "Input", label: "Style (tailwind)" },
  items: {
    type: "Repeater",
    label: "Content",
    control: {
      imgUrl: { type: "Image", label: "Image" },
      navigateTo: { type: "Input", label: "NavigateTo" },
    },
  },
};

export default schema;
