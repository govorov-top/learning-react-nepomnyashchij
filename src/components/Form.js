import React from 'react'
class Form extends React.Component {
    state = {
        firstName: '',
        email: '',
        message: '',
        country: '',
        subscription: false,
        gender: 'male',
    }
    inputChangeHandler = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }
    checkboxChangeHandler = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.checked
        });
    }
    validateName = () => {
        if (this.state.firstName.length < 5){
            alert('Your first name can`t be less than 7 letters')
        }
    }
    validateMessage = () => {
        if (this.state.message.length < 10){
            alert('Your message can`t be less than 10 letters')
        }
    }
    validateEmail = () => {
        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email)){
            alert('Your email isn\'t correct')
        }
    }

    render(){
        const {firstName, email, message, country, subscription, gender} = this.state;
        return (
            <>
                <input
                    onChange={this.inputChangeHandler}
                    onBlur={this.validateName}
                    type="text"
                    name="firstName"
                    value={firstName}
                    placeholder="First Name"/>
                <input
                    onChange={this.inputChangeHandler}
                    onBlur={this.validateEmail}
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Email"/>
                <br/> <br/>
                <textarea
                    onChange={this.inputChangeHandler}
                    onBlur={this.validateMessage}
                    name="message"
                    value={message}
                    cols="20"
                    rows="5"></textarea>
                <br/> <br/>
                <select name="country" value={country} onChange={this.inputChangeHandler}>
                    <option value="" disabled>Choose yor country</option>
                    <option value="1">USA</option>
                    <option value="2">Australia</option>
                    <option value="3">Canada</option>
                </select>
                <br/> <br/>
                <label>Subscription
                    <input
                        type="checkbox"
                        name="subscription"
                        checked={subscription}
                        onChange={this.checkboxChangeHandler}/>
                </label>
                <br/> <br/>
                <label>Gender
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={gender === 'male'}
                        onChange={this.inputChangeHandler}/> Male
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={gender === 'female'}
                        onChange={this.inputChangeHandler}/> Female
                </label>
            </>
        )
    }
}
export {Form}