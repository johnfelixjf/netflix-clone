import React, { useContext } from "react";
import AccordionContext from "./AccordionContext";
import "./AccordionStyles.css";
import close from "../../images/close.png";
import add from "../../images/add.png";

function AccordionHeader({ children, ...restProps }) {
  const [AccordionShow, setAccordionShow] = useContext(AccordionContext);

  function handleClick() {
    setAccordionShow(!AccordionShow);
  }

  return (
    <div className="accordion-header" onClick={handleClick} {...restProps}>
      {children}
      {AccordionShow ? (
        <img className="accordion-image" src={close} alt="Close" />
      ) : (
        <img className="accordion-image" src={add} alt="Open" />
      )}
    </div>
  );
}

export default AccordionHeader;
