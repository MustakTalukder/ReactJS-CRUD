import React, { Component } from 'react'

class Form extends Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.submitHandler} >
          <label>Name: <input type="text"
            name='name'
            onChange={this.props.changeHandler}

          
          /> </label>
          
            
          <label>Contact Number: <input type="text"
            name='number'
            onChange={this.props.changeHandler}
          />   </label>    
                  
                
            <button type="submit">Add</button>       
        </form>
      </div>
    )
  }
}
export default Form