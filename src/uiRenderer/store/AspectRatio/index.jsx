import { AspectRatio } from "./markup";

const MyAspectRatio = ({ ratio, imgUrl = "" }) => {
  const convertRatio = (ratio?.[0] || 16) / (ratio?.[1] || 9);

  return (
    <div>
      <AspectRatio ratio={convertRatio}>
        <img
          src={imgUrl}
          alt="Image"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  );
};
export default MyAspectRatio;
