import Accordion3 from "../class_components/Accordion3";

function GroupAc() {
    return (
        <>
            <h1>Class component Accordion</h1>
            <Accordion3 title="Section 1">
                Section 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Accordion3>
            <Accordion3 title='Section 2'>
                Section 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Accordion3>
            <Accordion3 title='Section 3'>
                Section 3: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Accordion3>
        </>

    );
}

export default GroupAc;