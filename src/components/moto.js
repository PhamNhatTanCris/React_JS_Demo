import React from "react";

class Moto extends React.Component {
    render() {

        return (

            <>
                <ul>
                    <li>Thương hiệu: {this.props.brand}</li>
                    <li>Moto: {this.props.model}</li>
                    <li>color: {this.props.color}</li>
                    <li>year: {this.props.year}</li>

                </ul>
            </>
        );
    }

}

export default Moto;