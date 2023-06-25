import TB, { name, age, address, gender, XepLoai } from "./info";



function Demo() {

    //React JSX
    return (
        <h1>Phạm Nhật Tân</h1>,
        <div className="container demo">
            <p>Pham nhat tan</p>
            <a href="www.google.com">google</a>
            <ul>
                <li>Tên: {name}</li>
                <li>Tuổi: {age}</li>
                <li>Địa chỉ: {address}</li>
                <li>Giới tính: {gender.toString()}</li>
                <li>Điểm trung bình: {TB()}</li>
                <li>Xếp loại: {XepLoai()}</li>
            </ul>
        </div>
    );

}

export default Demo