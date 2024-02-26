import { AspectRatio as AspectRatioMarkup } from "./markup";

const AspectRatio = ({
  name,
  height,
  width,
  padding,
  margin,
  border,
  borderRadius,
  backgroundColor,
  ratio,
  imgUrl = "",
  twStyle = "",
}) => {
  const convertRatio = (ratio?.[0] || 16) / (ratio?.[1] || 9);

  return (
    <AspectRatioMarkup
      ratio={convertRatio}
      style={{
        height,
        width,
        padding,
        margin,
        border,
        borderRadius,
        backgroundColor,
      }}
      className={twStyle}
    >
      <img
        src={imgUrl}
        alt="Image"
        className="rounded-md object-cover w-full h-full"
      />
    </AspectRatioMarkup>
  );
};
export default AspectRatio;
