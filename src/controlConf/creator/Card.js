import { BoxModel, Nameable, Size } from "../store/schema";

const schema = {
  ...Nameable,
  ...Size,
  ...BoxModel,
  title: { type: "Text", label: "Card Title" },
  description: { type: "Text", label: "Card Description" },
  cardContent: { type: "Text", label: "Card Content" },
  color: { type: "Color", label: "Text Color" },
  background: { type: "Color", label: "Button Background Color" },
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
