import FontSize from "./fontSize";

const Typography = {
  text: { type: "Text", label: "Text Content" },
  color: { type: "Color", label: "Color" },
  fontWeight: {
    type: "Range",
    min: 100,
    max: 900,
    step: 100,
    defaultValue: 400,
    label: "Font Weight",
  },
  ...FontSize,
};

export default Typography;
