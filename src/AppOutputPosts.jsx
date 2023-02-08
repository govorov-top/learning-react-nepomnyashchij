import React, {Component} from "react";
import Preloader from "./components/Preloader";
import OutputPosts from "./components/OutputPosts";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {}

    componentDidUpdate() {}

    componentWillUnmount() {}

    render(){
        return this.props.isLoading ? (<Preloader/>) : (
            <div className="App">
                <OutputPosts/>
            </div>
        ) ;
    }
}

export default App;