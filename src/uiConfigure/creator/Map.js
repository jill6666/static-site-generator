import { BoxModel, Nameable, Size } from "../store/schema";

const schema = {
  ...Nameable,
  ...Size,
  ...BoxModel,
  twStyle: { type: "Input", label: "Style (tailwind)" },
  positions: {
    type: "Repeater",
    label: "Positions",
    control: {
      lat: { type: "Input", label: "Position Lat" },
      lng: { type: "Input", label: "Position Lng" },
    },
  },
  defaultCenter: {
    type: "Group",
    label: "Center",
    control: {
      lat: { type: "Input", label: "Position Lat" },
      lng: { type: "Input", label: "Position Lng" },
    },
  },
  defaultZoom: { tyep: "Size", label: "Zoom" },
  waterColor: { type: "Color", label: "Water Color" },
  landscapeColor: { type: "Color", label: "Landscape Color" },
};

export default schema;
