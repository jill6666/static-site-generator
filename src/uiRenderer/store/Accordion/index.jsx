import {
  Accordion as AccordionMarkup,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./markup";

const Accordion = ({ items = [] }) => {
  return (
    <div>
      <AccordionMarkup
        type="multiple"
        collapsible
        style={{ background: "#fff" }}
      >
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={item?.trigger}
            style={{ padding: "0 .5rem" }}
          >
            <AccordionTrigger>{item?.trigger}</AccordionTrigger>
            <AccordionContent>{item?.content}</AccordionContent>
          </AccordionItem>
        ))}
      </AccordionMarkup>
    </div>
  );
};
export default Accordion;
