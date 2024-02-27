import { useState, useEffect } from "react";
import { Progress as ProgressMarkup } from "./markup";

const Progress = ({
  value,
  twStyle,
  height,
  width,
  padding,
  margin,
  border,
  borderRadius,
  background,
  color,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ProgressMarkup
      value={progress}
      className={"w-full " + twStyle}
      color={color}
      style={{
        height,
        width,
        padding,
        margin,
        border,
        borderRadius,
        background,
      }}
    />
  );
};
export default Progress;
