import React from "react";

class Contructerrr extends React.Component {

    constructor(props) {
        super(props);
        this.state = { color: "red", model: "XYZ" };
    }
    handleClick = () => {
        alert("handle click");

        this.setState({color: 'orange'})
    }
    render() {
        return (
            <>
                <div className="computer-wrap" style={{backgroundColor: "yellow", color: this.state.color}}>
                    <h1>name: {this.props.name}</h1>
                    <button onClick={this.handleClick}>Xem</button>
                </div>

            </>

        );
    }
}

export default Contructerrr;