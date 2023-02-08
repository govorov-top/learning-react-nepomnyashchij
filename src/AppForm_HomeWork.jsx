import React, {Component} from "react";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            isAgreeWithTerms: false,
        };
    }
    inputChangeHandler = (e) => {
        this.setState({
            ...this.state,
            [e.target.name] : e.target.value
        })
    }
    checkboxChangeHandler = (e) => {
        this.setState({
            ...this.state,
            [e.target.name] : e.target.checked
        })
    }
    submitFormHandler = () => {
        console.log('click')
        if (!this.state.isAgreeWithTerms){
            alert('Please, choose terms')
        }
    }
    validateEmail = () => {
        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email)){
            alert('Your email isn\'t correct')
        }
    }

    render(){
        const { email, isAgreeWithTerms } = this.state;
        return (
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onBlur={this.validateEmail}
                    onChange={this.inputChangeHandler}
                />
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isAgreeWithTerms"
                        checked={isAgreeWithTerms}
                        onChange={this.checkboxChangeHandler}
                    />
                    I agree with terms and conditions
                </label>
                <br />
                <button onClick={this.submitFormHandler}>Send</button>
            </div>
        );
    }
}

export default App;