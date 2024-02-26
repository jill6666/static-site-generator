import { repeat, position, coverSize } from "../control/imageControl";

const BackgroundGroup = {
  backgroundColor: { type: "Color", label: "背景顏色" },
  backgroundImage: { type: "Image", label: "背景圖" },
  backgroundRepeat: {
    type: "RadioButton",
    label: "背景圖重複",
    control: repeat,
  },
  backgroundPosition: {
    type: "RadioButton",
    label: "背景圖位置",
    layout: { col: 3 },
    control: position,
  },
  backgroundSize: {
    type: "RadioButton",
    label: "背景覆蓋方式",
    control: coverSize,
  },
  customBackgroundSize: { type: "Size", label: "背景固定尺寸" },
};

export default BackgroundGroup;
