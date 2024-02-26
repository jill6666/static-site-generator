import React, { Suspense } from "react";

const RenderSchema = React.lazy(() => import("../../index"));

const Box = ({
  name,
  children,
  height,
  width,
  padding,
  margin,
  border,
  borderRadius,
  backgroundColor,
  twStyle = "",
}) => {
  return (
    <div
      className={twStyle}
      style={{
        name,
        height,
        width,
        padding,
        margin,
        border,
        borderRadius,
        backgroundColor,
        overflow: "hidden",
      }}
    >
      <Suspense fallback={<></>}>
        <RenderSchema schema={children} />
      </Suspense>
    </div>
  );
};

export default Box;
