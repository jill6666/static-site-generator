import { BoxModel, Nameable, Size } from "../store/schema";

const schema = {
  ...Nameable,
  ...Size,
  ...BoxModel,
  zIndex: { type: "Range", label: "Setting for Z-index", min: 0, max: 99 },
  position: {
    type: "Select",
    label: "Position",
    options: [
      { value: "static", label: "Static" },
      { value: "relative", label: "Relative" },
      { value: "absolute", label: "Absolute" },
      { value: "sticky", label: "Sticky" },
    ],
  },
  overflow: {
    type: "Select",
    label: "overflow",
    options: [
      { value: "auto", label: "Auto" },
      { value: "hidden", label: "Hidden" },
      { value: "visible", label: "Visible" },
      { value: "scroll", label: "Scroll" },
      { value: "inherit", label: "Inherit" },
    ],
  },
  pos: {
    type: "Group",
    label: "Relative/ Absolute Position",
    control: {
      top: { label: "Top", type: "Size" },
      right: { label: "Right", type: "Size" },
      bottom: { label: "Bottom", type: "Size" },
      left: { label: "Left", type: "Size" },
    },
  },
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
};

export default schema;
