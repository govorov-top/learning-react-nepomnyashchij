import React, {Component} from "react";
import Preloader from "./Preloader";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render(){
        return this.props.isLoading ? (<Preloader/>) : (
            <div className="App">
                <h1>HI!</h1>
                <button onClick={this.handleClick}>{this.state.count}</button>
            </div>
        ) ;
    }
}

export default App;
