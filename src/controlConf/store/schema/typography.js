import FontSize from "./fontSize";

const Typography = {
  text: { type: "Input", label: "Text Content" },
  color: { type: "Color", label: "Color" },
  fontWeight: {
    type: "Range",
    label: "Font Weight",
    min: 100,
    max: 900,
    step: 100,
    defaultValue: 400,
  },
  ...FontSize,
};

export default Typography;
