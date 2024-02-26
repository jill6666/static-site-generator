import { BoxModel, Nameable, Size } from "../store/schema";

const schema = {
  ...Nameable,
  ...Size,
  ...BoxModel,
  zIndex: { type: "Range", label: "Setting for Z-index", min: 0, max: 99 },
  otherBorder: {
    type: "Group",
    label: "Setting for Border",
    control: {
      borderLeft: { type: "Border", label: "Border Left" },
      borderRight: { type: "Border", label: "Border Right" },
      borderTop: { type: "Border", label: "Border Top" },
      borderBottom: { type: "Border", label: "Border Bottom" },
    },
  },
  otherBorderRadius: {
    type: "Group",
    label: "Setting for Border Radius",
    control: {
      borderTopLeftRadius: { type: "Size", label: "Left Top" },
      borderTopRightRadius: { type: "Size", label: "Right Top" },
      borderBottomRightRadius: { type: "Size", label: "Right Bottom" },
      borderBottomLeftRadius: { type: "Size", label: "Left Bottom" },
    },
  },
  imgUrl: { type: "Image", label: "Image" },
  ratio: {
    type: "Radio",
    label: "Setting for Ratio",
    control: [
      { label: "21:9", value: [21, 9] },
      { label: "16:9", value: [16, 9] },
      { label: "4:3", value: [4, 3] },
      { label: "1:1", value: [1, 1] },
    ],
  },
};

export default schema;
