import FontSize from "./fontSize";

const Typography = {
  text: { type: "Text", label: "文字" },
  color: { type: "Color", label: "顏色" },
  fontWeight: {
    type: "Range",
    min: 100,
    max: 900,
    step: 100,
    defaultValue: 400,
    label: "字體粗細",
  },
  ...FontSize,
};

export default Typography;
