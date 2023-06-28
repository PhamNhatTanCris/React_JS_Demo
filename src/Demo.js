import TB, { name, age, address, gender, XepLoai } from "./info";
import students from "./student";
import cities from "./destruct1";
import destructObject from "./DestructObject";

import { monHoc, testStudent } from "./DestructObject";


import { numbersOne, numbersTwo } from "./SpreadOp";
function Demo() {

    let [hn, nd, hp] = cities;
    let { name, money } = destructObject;


    let nameMoney = {...destructObject};
    nameMoney.numer_age = 40;
    let allNumber = [...numbersOne, ...numbersTwo];
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
                    <div className="student-item" style={{ borderBottom: '1px solid red', background: 'yellow' }}>
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
                            <div className="studen-item" style={{ background: "blue" }}>
                                <div>tên: {studentss.name}</div>
                            </div>
                        )
                    }
                )
            }
            <h1>code thu destructuring</h1>
            <div>
                <div>{hn}</div>
                <div>{nd}</div>
                <div>{hp}</div>
            </div>

            <h1>code thu destructuring</h1>
            <div>
                <div>{name}</div>
                <div>{money}</div>
            </div>

            <h2>điểm trung bình</h2>
            <div>
                <div>xếp loại: {testStudent(monHoc)}</div>
            </div>

            <h3>spread Ob</h3>
            <ul>
                {
                    allNumber.map((itemsNumber) => {
                        return (
                            <li>{itemsNumber}</li>
                        )
                    }

                    )
                }
            </ul>
            <h3>bài mới</h3>
            <pre>
                {
                    JSON.stringify(nameMoney, null, 2)
                }
            </pre>

        </div>
    );

}

export default Demo