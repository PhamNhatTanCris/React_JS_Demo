

function Demo4(){

    let age = 12;
    
    return (
        <>
            <h1>Demo câu lệnh điều kiện rút gọn trong JSX</h1>
            <p>{(age > 18) ? "người lớn" : "trẻ em"}</p>
            <p>{(age < 10) ? "thiếu nhi" : "đi tù"}</p>
        </>

    );
}

export default Demo4;