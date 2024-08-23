import React, {useRef} from "react";

export const AccordionItem = ({faqItem, onClick, isOpen}) => {
      const itemRef = useRef(null);




      return (
            <li className="accordion-item">
            <button className="accordion-header" onClick={() => onClick()}>
                 
                  <span className="accordion-header__text"> {faqItem.question} </span>
                  <span className="accordion-header__plus"
                  
                  style={
                        isOpen ? { transform: 'rotate(45deg)' } : {display: "flex"}
                  }
                  
                  
                  >+</span>
            </button>
              
              
              
              
              <div 
              className="accordion-collapse"
                  style={
                        isOpen ? {height: itemRef.current.scrollHeight} : {height: "0"}
                  }
              >
                <div className="accordion-body" ref={itemRef}>{faqItem.answer}</div>
              </div>
            </li>
      );
}