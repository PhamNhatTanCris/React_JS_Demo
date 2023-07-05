import { useState } from "react"


const M4 = () => {


    const [isEvent, setIsEvent] = useState(9);
    return(
        <>
            {isEvent <= 10 ? "Người lớn" : "trẻ em"}
        </>
    );
}

export default M4;