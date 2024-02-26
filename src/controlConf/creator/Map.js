import { BoxModel, Nameable, Size } from "../store/schema";

const schema = {
  ...Nameable,
  ...Size,
  ...BoxModel,
  positions: {
    type: "Repeater",
    label: "Positions",
    control: {
      lat: { type: "Text", label: "Position Lat" },
      lng: { type: "Text", label: "Position Lng" },
    },
  },
  defaultCenter: {
    type: "Group",
    label: "Center",
    control: {
      lat: { type: "Text", label: "Position Lat" },
      lng: { type: "Text", label: "Position Lng" },
    },
  },
  defaultZoom: { tyep: "Size", label: "Zoom" },
  waterColor: { type: "Color", label: "Water Color" },
  landscapeColor: { type: "Color", label: "Landscape Color" },
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
