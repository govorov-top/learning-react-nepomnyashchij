import React, {Component} from "react";
import {FormUnControlled} from "./components/FormUnControlled";

class AppFormUnControlled extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }
    render(){
        return (
            <div className="App">
                <FormUnControlled/>
            </div>
        ) ;
    }
}

export default AppFormUnControlled;