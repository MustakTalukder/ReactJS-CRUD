import React, { Component } from 'react'
import Contact from './Contact/Contact';


class Contacts extends Component {
    render() {
      console.log(this.props)
      return (
      <div style={{textAlign: "center", margin: 'auto', width: '50%'}}>
        <ul  style={{listStyleType: 'none'}}>
          {this.props.contacts.map(contact => {
            return (
              <Contact
                contact={contact}
                deleteHandler={this.props.deleteHandler}
                editHandler={this.props.editHandler}
                editContact = {contact}
              />
            )
          } )}
        </ul>
      </div>
    )
  }
}
export default Contacts

