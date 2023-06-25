let name = "Phạm Nhât tân"
let age = 21
let address = "nam định"
let gender = true

function TB() {
    let toan = 9
    let ly = 6
    let hoa = 7

    let DTB = (toan + ly + hoa) / 3;

    return DTB;
}

function XepLoai() {
    return "khá";
}


export { name, age, address, gender, XepLoai }
export default TB