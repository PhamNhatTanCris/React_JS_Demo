

const M3 = () => {
    
    const handleClick = (a, b) => {
        console.log(b);

    }
    return (
        <>
            <button onClick={(event) => handleClick('test', event)}>nút click</button>
        </>
    );
}

export default M3;