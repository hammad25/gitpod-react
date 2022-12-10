import React, { Component } from 'react'

export class UncontrolledForm extends Component {
  constructor(props) {
    super(props)
    this.inputName = React.createRef();
    this.inputCategory = React.createRef();
    this.inputComments = React.createRef();
  
  }
  handleSubmit = (event) => {
        event.preventDefault();
    }

  render() {
    return (
      <div>
        <h2>Please fill out the form below:</h2>
        <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="id-name">Your name</label>
                    <input  
                      id="id-name" 
                      name="name" 
                      type="text"
                      ref = {this.inputName}
                    />
                </div>
                <div>
                    <label htmlFor="id-category">Query category</label>
                    <select 
                      name="category"
                      id="id-category"
                      ref={this.inputCategory}>
                        <option value="website">Website issue</option>
                        <option value="order">Order issue</option>
                        <option value="general">General issue</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="id-comment">Comments:</label>
                    <textarea 
                      id="id-comments" 
                      ref={this.inputComments}
                      name="comments"></textarea>
                </div>
                <input type="submit" value='Submit' />

        </form>
      </div>
    )
  }
}

export default UncontrolledForm