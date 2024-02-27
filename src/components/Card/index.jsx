import {
  Card as CardMarkup,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "../../uiRenderer/store/web/Card/markup";
import { AspectRatio } from "../../uiRenderer/store/web/AspectRatio/markup";
import { Button } from "../../uiRenderer/store/web/Button/markup";

const Card = ({
  imgUrl = "",
  title = "",
  updatedAt = "",
  updatedBy = "",
  onPreview = () => {},
  onEdit = () => {},
  onDelete = () => {},
}) => {
  return (
    <CardMarkup className="border rounded-[1rem] bg-white flex flex-col">
      <CardHeader>
        <AspectRatio ratio={16 / 9}>
          <img
            src={imgUrl}
            alt="Image"
            className="object-cover w-full h-full"
          />
        </AspectRatio>
      </CardHeader>
      <CardContent>
        <CardTitle className="mb-2">{title}</CardTitle>
        <CardDescription>UpdatedAt: {updatedAt}</CardDescription>
        <CardDescription>UpdatedBy: {updatedBy}</CardDescription>
      </CardContent>
      <CardFooter className="w-full flex gap-4">
        <Button variant="outline" onClick={onPreview}>
          Preview
        </Button>
        <Button variant="outline" onClick={onEdit}>
          Edit
        </Button>
        <Button variant="outline" onClick={onDelete}>
          Delete
        </Button>
      </CardFooter>
    </CardMarkup>
  );
};

export default Card;
