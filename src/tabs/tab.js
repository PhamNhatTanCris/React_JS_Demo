import { useState } from "react";

const Tab = () => {


    const [isCity, setIsCity] = useState(0);

    const tabIndex = param => {
        setIsCity(param);
    }
    return (
        <>
            <div className="tab">
                <button className="tablinks" onClick={() => tabIndex(0)}>London</button>
                <button className="tablinks" onClick={() => tabIndex(1)}>Paris</button>
                <button className="tablinks" onClick={() => tabIndex(2)}>Tokyo</button>
                <button className="tablinks" onClick={() => tabIndex(3)}>Hanoi</button>
            </div>
            <div className="tab-content">
                {isCity == 0 &&<div>
                    <h3>London</h3>
                    <p>London is capital of England</p>
                </div>
                }
                {isCity == 1 &&<div>
                    <h3>Paris</h3>
                    <p>Paris is capital of England</p>
                </div>
                }
                {isCity == 2 &&<div>
                    <h3>Tokyo</h3>
                    <p>Tokyo is capital of England</p>
                </div>
                }
                {isCity == 3 &&<div>
                    <h3>Hanoi</h3>
                    <p>Hanoi is capital of England</p>
                </div>
                }
            </div>


        </>
    );
}

export default Tab;