import TB, { name, age, address, gender, XepLoai } from "./info";
import students from "./student";
import student from "./student";


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

            <h4>Danh sách sinh viên dùng array.map():</h4>
            {students.map((studentItem) => {
                return (
                    <div className="student-item" style={{borderBottom:'1px solid red', background: 'yellow'}}> 
                        <div>tên: {studentItem.name}</div>
                        <p>tuổi: {studentItem.age}</p>
                        <section>địa chỉ: {studentItem.address}</section>
                    </div>
                )
            }

            )

            }

            {
                students.map(
                    (studentss) => {
                        return (
                            <div className="studen-item" style={{background:"blue"}}>
                                <div>tên: {studentss.name}</div>
                            </div>
                        )
                    }
                )
            }
        </div>
    );

}

export default Demo