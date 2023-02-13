import React, {Component} from "react";
import TimerUseReducer from "./components/TimerUseReducer";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }
    render(){
        return (
            <div className="App">
                <TimerUseReducer/>
            </div>
        ) ;
    }
}

export default App;