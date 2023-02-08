import React, {Component} from "react";
import {FormWithRef} from "./components/FormWithRef";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }
    render(){
        return (
            <div className="App">
                <FormWithRef/>
            </div>
        ) ;
    }
}

export default App;