import {
  Accordion as AccordionMarkup,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./markup";

const Accordion = ({
  name,
  height,
  width,
  padding,
  margin,
  border,
  borderRadius,
  background,
  items = [],
  twStyle = "",
  triggerColor,
  contentColor,
}) => {
  return (
    <AccordionMarkup
      type="multiple"
      className={twStyle}
      style={{
        height,
        width,
        padding,
        margin,
        border,
        borderRadius,
        background,
      }}
    >
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={item?.trigger}
          style={{ padding: "0 .5rem" }}
        >
          <AccordionTrigger style={{ color: triggerColor }}>
            {item?.trigger}
          </AccordionTrigger>
          <AccordionContent style={{ color: contentColor }}>
            {item?.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionMarkup>
  );
};
export default Accordion;
