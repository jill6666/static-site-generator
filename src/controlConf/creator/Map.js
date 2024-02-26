import { BoxModel, Nameable, Size } from "../store/schema";

const schema = {
  ...Nameable,
  ...Size,
  ...BoxModel,
  twStyle: { type: "Text", label: "Button Style (tailwind)" },
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
};

export default schema;
