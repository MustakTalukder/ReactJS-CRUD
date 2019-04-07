import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <div style={{ margin: 'auto', width: '50%' , marginBottom: '5px', padding: '5px', border: '2px solid', textAlign: 'left' }}>
        
        <div style={{ textAlign: 'right' }}>
          <button onClick={ ()=> this.props.editHandler(this.props.contact)}>Edit</button>
          <button onClick= { () => this.props.deleteHandler(this.props.contact)}>Delete</button>
        </div>

        <li >
          <label>Name: {this.props.contact.name}  </label> 
        </li>
        
        <li >
          <label>Phone: {this.props.contact.number}  </label> 
        </li>


      </div>

    )
  }
}
export default Contact
