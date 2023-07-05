import { useState } from "react";
import "./Accordion.css"


function Accordion(props) {

    const [isOpen, setIsOpen] = useState(false);



    const handleClick = () => {
        // setIsOpen(true);
        setIsOpen(!isOpen);
    }
    return (
        <>
            <h3 className="acc-title" onClick={handleClick}>
                {props.title}
            </h3>
            { isOpen && <div className="acc-content">
                {props.children}
            </div>}
            

        </>
    );
}

export default Accordion;