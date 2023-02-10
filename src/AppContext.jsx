import React, {Component} from "react";
import {Context} from "./hooks/UseContextHook";
import Books from "./components/Books";
class AppContext extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }
    render(){
        return <Context>
            <Books/>
        </Context>
    }
}

export default AppContext;