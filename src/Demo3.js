

function Demo3(){
    
    let age = 32;
    let mss = "trẻ em";
    if(age > 18){
        mss = "người lớn ";
    }
    
    return (
        <>
            <h1>Phân loại: </h1>
            <p>{mss}</p>
        </>


    );

}

export default Demo3;