import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name : "",
        category: 'website',
        comments : '',
      }
    }

    // handleChange = (event) => {
    //     const {name, value} = event.target
    //     this.setState({
    //         [name]: value
    //     })
    // }

    handleChange = (event) => {
        this.setState({
            name : event.target.value
        })
    }
    handleCategoryChange = (event) => {
        this.setState({
            category : event.target.value
        })
    }
    handleComments = (event) => {
        this.setState({
            comments : event.target.value
        })
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
                    <input  onChange={this.handleChange} value={this.state.name} id="id-name" name="name" type="text" />
                </div>
                <div>
                    <label htmlFor="id-category">Query category</label>
                    <select onChange={this.handleCategoryChange} value={this.state.category} name="category" id="id-category">
                        <option value="website">Website issue</option>
                        <option value="order">Order issue</option>
                        <option value="general">General issue</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="id-comment">Comments:</label>
                    <textarea  onChange={this.handleComments} value={this.state.comments} name="comments" id="id-comments"></textarea>
                </div>
                <input type="submit" value='Submit' />

        </form>
      </div>
    )
  }
}

export default ControlledForm