

let destructObject = {
    name: "tân",
    age: 23,
    address: "nam định",
    money: 23000
}

let monHoc = {
    toan: 2,
    van: 4,
    ly: 6,
    hoa: 8,
    anh: 10,
    su: 10,
    dia: 11,
    GDCD: 1
}

function testStudent({toan, ly, hoa}) {
    let TB = (toan + ly + hoa) / 3;
    let ms = '';
    if(TB < 6){
        ms = "trượt";
    } else {
        ms = "đỗ";
    }

    return ms;
}


export default destructObject
export {monHoc, testStudent}