import React from 'react'
class FormUnControlled extends React.Component {
    constructor(props) {
        super(props);
        this.cardRef = React.createRef();
        this.emailRef = React.createRef();
    }
    inputChangeHandler = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        }, () => {
            if (this.state.card.length === 16){
                this.emailRef.current.focus()
            }
        });
    }
    submitHandler = (e) => {
        e.preventDefault();
        if (this.cardRef.current.value.length < 16){
            return alert('Invalid card number!');
        }
        this.cardRef.current.value = ''
        this.emailRef.current.value = ''
        return alert('Send!');
    }
    render(){
        return (
            <form onSubmit={this.submitHandler}>
                <input
                    onChange={this.inputChangeHandler}
                    type="number"
                    name="card"
                    placeholder="Card"
                    ref={this.cardRef}
                />
                <input
                    onChange={this.inputChangeHandler}
                    type="text"
                    name="email"
                    placeholder="Email"
                    ref={this.emailRef}
                />
                <button>Send</button>
            </form>
        )
    }
}
export {FormUnControlled}