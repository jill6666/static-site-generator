import { AspectRatio as AspectRatioMarkup } from "./markup";

const AspectRatio = ({ ratio, imgUrl = "" }) => {
  const convertRatio = (ratio?.[0] || 16) / (ratio?.[1] || 9);

  return (
    <div>
      <AspectRatioMarkup ratio={convertRatio}>
        <img
          src={imgUrl}
          alt="Image"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatioMarkup>
    </div>
  );
};
export default AspectRatio;
