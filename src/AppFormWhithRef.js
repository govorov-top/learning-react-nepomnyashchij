import React, {Component} from "react";
import {FormWhithRef} from "./components/FormWhithRef";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }
    render(){
        return (
            <div className="App">
                <FormWhithRef/>
            </div>
        ) ;
    }
}

export default App;