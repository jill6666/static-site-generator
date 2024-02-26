import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./markup";

const MyAccordion = ({ items = [] }) => {
  return (
    <div>
      <Accordion type="multiple" collapsible style={{ background: "#fff" }}>
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
      </Accordion>
    </div>
  );
};
export default MyAccordion;
