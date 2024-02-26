import {
  Card as CardMarkup,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./markup";

const Card = ({ title, description, cardContent }) => {
  return (
    <CardMarkup className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{cardContent}</CardContent>
    </CardMarkup>
  );
};
export default Card;
