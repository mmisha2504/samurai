import React, {useState, useEffect} from "react";
 
class Clicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
    return <div>
    <p>Ты нажал {this.state.count} раз</p>
    <button onClick={()=>{ 
        this.setState({count: this.state.count + 1})
    }}>Нажми</button>

    </div>}

}

export default Clicker;