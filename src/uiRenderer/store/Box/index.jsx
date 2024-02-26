import React, { Suspense } from "react";

const RenderSchema = React.lazy(() => import("../../index"));

const Box = ({
  children,
  customBackgroundSize,
  backgroundSize,
  otherBorder,
  otherBorderRadius,
  pos,
  background,
  backgroundImage,
  position,
  ...res
}) => {
  return (
    <div
      style={{
        ...res,
        ...(background?.includes("linear")
          ? { backgroundImage: background }
          : { backgroundColor: background }),
        ...(backgroundImage && {
          backgroundImage: `url("${backgroundImage}")`,
        }),
        ...pos,
        ...otherBorder,
        ...otherBorderRadius,
        position: position || "relative",
        backgroundSize: customBackgroundSize || backgroundSize,
      }}
    >
      <Suspense fallback={<></>}>
        <RenderSchema schema={children} />
      </Suspense>
    </div>
  );
};

export default Box;
