import React, { useState } from "react";
import "./Accordion.scss"
import { AccordionItem } from "./AccordionItem"

const Accordion = ({ faqList }) => {
  const [openId, setId] = useState(null);

  return (
    <ul className="accordion">
      {faqList.map((faqItem, id) => {
        
        return <AccordionItem 
        onClick={() => (id === openId ? setId(null) : setId(id))}
        faqItem={faqItem} 
        isOpen={id === openId} 
        key={id}/>

      })}
    </ul>
  );
};

export default Accordion;
