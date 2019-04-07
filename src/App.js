import React, { Component } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Contacts from './components/Contacts/Contacts';
import uuid from 'uuid/v1'
import EditContact from './components/EditContact/EditContact';
 

class App extends Component {

  state = {
    contacts: [
      {
        id: uuid(),
        name: 'Mustak',
        number: '01737976430'
      },
      {
        id: uuid(),
        name: 'Hridoy',
        number: '01557704794'
      }
    ],

    name: '',
    number: '',

    selectedContact: null,

    inputBox: true
  }


  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault();

    // copy contacts array from state
    let contacts = [...this.state.contacts]

    // in our new array push new value
    contacts.push({
      name: this.state.name,
      number: this.state.number,
      id: uuid(),
    })

    // assigning new value to state
    this.setState({
      contacts,
    })
  }

  deleteContactHandler = (contact) => {
    let index = this.state.contacts.findIndex(ct => ct.id === contact.id)

    let contacts = [...this.state.contacts]
    contacts.splice(index, 1)

    this.setState({
      contacts
    })

  }

  
  editContactHandler = (contact) => {

    this.setState({
      selectedContact: contact,
      inputBox: false
    })
  }

  changeNameHandler = (id, newName) => {
    let index = this.state.contacts.findIndex(ct => ct.id === id)

    let contacts = [...this.state.contacts]
    contacts[index].name = newName
    this.setState({
      contacts
    })
  }

  changeNumberHandler = (id, newNumber) => {
    let index = this.state.contacts.findIndex(ct => ct.id === id)
    
    let contacts = [...this.state.contacts]
    contacts[index].number = newNumber

    this.setState({
      contacts
    })
  }

  updatedFormHandler = () => {
    this.setState({
      selectedContact: null,
      inputBox: true
    })
  }


  render() {

    let editForm = this.state.selectedContact
    if (editForm) {
      editForm = (
        <EditContact
          changeName={this.changeNameHandler}
          numberHandler={this.changeNumberHandler}
          updatedForm={this.updatedFormHandler}
           contact={this.state.selectedContact} />
      )
    } 

    let inputForm = this.state.inputBox
    if (inputForm) {
      inputForm = (
          <Form
          changeHandler={this.changeHandler}
          submitHandler={this.submitHandler}
        />
      )
    }
    return (
      <div className="App">
        <h1>Crud List</h1>
        {inputForm}
        {editForm}
        <Contacts
          contacts={this.state.contacts}
          deleteHandler={this.deleteContactHandler}
          editHandler= {this.editContactHandler}
        />
        
      </div>
    );
  }
}

export default App;
