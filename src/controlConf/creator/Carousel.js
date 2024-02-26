import { BoxModel, Nameable, Size } from "../store/schema";

const schema = {
  ...Nameable,
  ...Size,
  ...BoxModel,
  twStyle: { type: "Text", label: "Button Style (tailwind)" },
  orientation: {
    type: "Radio",
    label: "Orientation",
    control: [
      { label: "Vertical", value: "vertical" },
      { label: "Horizontal", value: "horizontal" },
    ],
  },
  items: {
    type: "Repeater",
    label: "Content",
    control: {
      imgUrl: { type: "Image", label: "Image" },
      navigateTo: { type: "URL", label: "NavigateTo" },
    },
  },
};

export default schema;
