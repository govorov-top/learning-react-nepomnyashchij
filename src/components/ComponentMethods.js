import React, {Component} from "react";
import Preloader from "./Preloader";

class ComponentMethods extends Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: false,
            comments: []
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => this.setState({posts: data, loading: true}));
        this.timerId = setInterval(()=>{
            fetch('https://jsonplaceholder.typicode.com/comments')
                .then(response => response.json())
                .then(data => this.setState({comments: data}));
        },3000);
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.timerId);
    }

    render(){
        console.log(this.state.posts);
        return this.props.isLoading ? (<Preloader/>) : (
            <div className="ComponentMethods">
                {
                    this.state.loading ?
                        <h5>{this.state.posts.length}</h5> :
                        <h3>Loading</h3>

                }
            </div>
        ) ;
    }
}

export default ComponentMethods;
