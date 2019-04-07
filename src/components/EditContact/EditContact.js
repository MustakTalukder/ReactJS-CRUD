import React, { Component } from 'react'

class EditContact extends Component {

    nameHandler = (e) => {
        let newName = e.target.value
        this.props.changeName(this.props.contact.id, newName)
    }
    numberHandler = (e) => {
        let newNumber = e.target.value
        this.props.numberHandler(this.props.contact.id, newNumber)
    }

    formHandler = (e) => {
        e.preventDefault()
        this.props.updatedForm()
    }

    render() {
        return (
            <form onSubmit={this.formHandler} >
                <label>Name: <input
                    type="text"
                    name="name"
                    onChange={this.nameHandler}
                    value={this.props.contact.name}
                    /> 
                </label>

                <label> Contact Number: <input
                        type="text"
                        name="number"
                        onChange={this.numberHandler}
                        value={this.props.contact.number}
                    />  
                </label>

                <button type='submit'>Update</button>

            </form>
        )

    }
}

export default EditContact