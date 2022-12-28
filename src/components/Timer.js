import React, {Component} from "react";

class Timer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            isCounting: false,
        }
    }

    componentDidMount() {
        const userCount = localStorage.getItem('time');
        if (userCount){
            this.setState({count: +userCount});
        }
    }

    componentDidUpdate() {
        localStorage.setItem('time', this.state.count);
    }

    componentWillUnmount() {
        clearInterval(this.timeoutStartID);
    }
    handleStart = () => {
        this.setState({isCounting: true});
        this.timeoutStartID = setInterval(()=>{
            this.setState({count: this.state.count + 1});
        }, 1000);

    }
    handleStop = () => {
        this.setState({isCounting: false});
        clearInterval(this.timeoutStartID);
    }
    handleReset = () => {
        this.setState({count: 0, isCounting: false});
        clearInterval(this.timeoutStartID);
        localStorage.setItem('time', '0');
    }

    render(){
        return (
            <div className="timer">
                <h1>React Timer</h1>
                <h3>{this.state.count}</h3>
                {!this.state.isCounting ? (
                    <button onClick={this.handleStart}>Start</button>
                ) : (
                    <button onClick={this.handleStop}>Stop</button>
                )}
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

export default Timer;
