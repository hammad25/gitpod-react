import React, { Component } from 'react'
import axios from 'axios';


export class HTTPPost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         apiResponse : null
      }
    }
    postApi = () => {
        axios.post(
            'https://jsonplaceholder.typicode.com/posts', 
            {
                title: 'Hello world!',
                body : "It works",
                userID:  123,
            }
        ).then(response =>  {
            console.log(response)
            this.setState({
                apiResponse : response.data
            })
        })
    }

  render() {
    const {apiResponse} = this.state;
    return (
      <div>
        <button  onClick={this.postApi}>
            Create Post
        </button>

        {
            apiResponse ? 
                (<div>
                    <h1>{apiResponse.title}</h1>
                    <p>Post id: {apiResponse.id}</p>
                    <p>{apiResponse.body}</p>
                    <p>user id:{apiResponse.userID}</p>
                </div> )
                : (<p>Please click the button above</p>)

            
        }





      </div>
    )
  }
}

export default HTTPPost