import {
  Card as CardMarkup,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "../../uiRenderer/store/web/Card/markup";
import { Button } from "../../uiRenderer/store/web/Button/markup";
import {
  OpenInNewWindowIcon,
  Pencil2Icon,
  TrashIcon,
  CopyIcon,
} from "@radix-ui/react-icons";
import { Image } from "antd";

const Card = ({
  imgUrl = "",
  title = "",
  updatedAt = "",
  updatedBy = "",
  onView = () => {},
  onEdit = () => {},
  onDelete = () => {},
  onCopy = () => {},
}) => {
  const btns = [
    {
      value: "view",
      icon: <OpenInNewWindowIcon />,
      variant: "outline",
      onClick: onView,
    },
    {
      value: "edit",
      icon: <Pencil2Icon />,
      variant: "outline",
      onClick: onEdit,
    },
    {
      value: "delete",
      icon: <TrashIcon />,
      variant: "outline",
      onClick: onDelete,
    },
    { value: "copy", icon: <CopyIcon />, variant: "outline", onClick: onCopy },
  ];
  return (
    <CardMarkup className="border rounded-none max-w-[250px] bg-white flex flex-col">
      <Image
        width={"100%"}
        height={"120px"}
        src={imgUrl}
        alt="Image"
        style={{ objectFit: "cover" }}
      />
      <CardContent className="p-4 flex flex-col gap-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{updatedAt}</CardDescription>
        <CardDescription>By: {updatedBy}</CardDescription>
      </CardContent>
      <CardFooter className="w-full flex gap-4 p-4 pt-0 justify-between">
        {btns.map((btn) => (
          <Button key={btn?.value} {...btn} size="icon">
            {btn?.icon}
          </Button>
        ))}
      </CardFooter>
    </CardMarkup>
  );
};

export default Card;
