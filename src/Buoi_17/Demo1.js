import React from "react";

class Demo1 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            studentName: 'Phạm Nhật Tân',
            studentAge: 22,
            boxColor: 'red',
            boxBgColor: 'green',
        };
    }

    changeData = () => {
        this.setState({
            studentName: 'Lê Văn Lâm',
            studentAge: 26,
            boxColor: 'yellow',
            boxBgColor: 'blue',
        });
    }

    restoreData = () => {
        this.setState({
            studentName: 'Phạm Nhật Tân',
            studentAge: 22,
            boxColor: 'red',
            boxBgColor: 'green',
        });
    }

    render() {

        let boxStyle = { color: this.state.boxColor, backgroundColor: this.state.boxBgColor }
        return (
            <>
                <div className='box' style={boxStyle}>
                    <h1>Demo state in class component</h1>
                    <p>In ra trạng thái state hiện tại : {this.state.studentName}</p>
                    <p>Tuổi SV : {this.state.studentAge}</p>
                    <p>Màu sắc : {this.state.boxColor}</p>
                    <p>Màu nền : {this.state.boxBgColor}</p>
                </div>

                <button onClick={this.changeData}>Nút số 1</button>
                <button onClick={this.restoreData}>Nút số 2</button>
            </>
        );
    }

}

export default Demo1;