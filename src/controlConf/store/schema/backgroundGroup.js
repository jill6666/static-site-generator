import { repeat, position, coverSize } from "../control/imageControl";

const backgroundGroup = {
  background: {
    type: "Color",
    label: "Background Color",
    linearGradient: true,
  },
  backgroundImage: { type: "Image", label: "Background Image" },
  backgroundRepeat: {
    type: "Radio",
    label: "Background Repeat",
    control: repeat,
  },
  backgroundPosition: {
    type: "Radio",
    label: "Background Position",
    layout: { col: 3 },
    control: position,
  },
  backgroundSize: {
    type: "Radio",
    label: "Background Size",
    control: coverSize,
  },
  customBackgroundSize: { type: "Size", label: "Custom Background Size" },
};

export default backgroundGroup;
