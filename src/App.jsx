import React, {Component} from "react";
import {FormWithRef} from "./components/FormWithRef";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import TimerFunctional from "./components/TimerFunctional";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }
    render(){
        return (
            <div className="App">
                <TimerFunctional/>
                <FormWithRef/>
            </div>
        ) ;
    }
}

export default App;