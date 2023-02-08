import React from 'react'
class FormWithRef extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            card: '',
        }
        this.firstNameRef = React.createRef()
        this.cardRef = React.createRef()
    }

    inputChangeHandler = (e) => {
        const callback = () => {
            if (this.state.card.length === 16){
                this.firstNameRef.current.focus()
            }
        }
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        }, callback);
    }
    render(){
        const {firstName, card} = this.state;
        return (
            <>
                <input
                    onChange={this.inputChangeHandler}
                    type="text"
                    name="firstName"
                    value={firstName}
                    placeholder="First Name"
                    ref={this.firstNameRef}
                />
                <input
                    onChange={this.inputChangeHandler}
                    type="number"
                    name="card"
                    value={card}
                    placeholder="Card"
                    ref={this.cardRef}
                />
            </>
        )
    }
}
export {FormWithRef}