import React, { Component } from 'react'
import axios from 'axios'

export class HTTPpostchallenge extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        apiResonse : null
      }
    }
    
    apiPost = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', 
            {
                title: 'Hello world!',
                body : "It works",
                userID:  123, 
            }
        ).then(response => {
            this.setState({
                apiResonse : response.data
            })
        })
    }


  render() {
    const post = this.state.apiResonse
    return (
      <div>
        <button onClick={this.apiPost} >Create Post</button>

        {
            post ? 
            (
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.id}</p>
                    <p>{post.body}</p>
                    <p>{post.userID}</p>
                </div>
            ):(
                <p>Please click button </p>
            )
        }



      </div>

    )
  }
}

export default HTTPpostchallenge