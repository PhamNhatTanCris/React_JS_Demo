

const Cities = () => {
    let cities = ["Hà Nội", "Nam Định", "Hà Nam", "Thái Bình"];

    return (
        <>
            <ul>
                {cities.map((citiess, idx) => <li key={idx}>{idx}.{citiess}</li>)}

            </ul>
        </>

    );

}

export default Cities;