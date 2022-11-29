// rfce
// functional component 
import React from 'react'

function ES7snippets() {
  return (
    <div>ES7snippets</div>
  )
}

export default ES7snippets

// rafce
// creates arrow functional component
import React from 'react'

const ES7snippets = () => {
  return (
    <div>ES7snippets</div>
  )
}

export default ES7snippets

// rce
// creates a react class
import React, { Component } from 'react'

export class ES7snippets extends Component {
  render() {
    return (
      <div>ES7snippets</div>
    )
  }
}

export default ES7snippets

// rcon
// creates constructor
constructor(props) {
  super(props)

  this.state = {
     first
  }
}

// ------ rce + rcon
import React, { Component } from 'react'

export class ES7snippets extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first
      }
    }

  render() {
    return (
      <div>ES7snippets</div>
    )
  }
}

export default ES7snippets



// clg
console.log(first)

// clo  
console.log('first', first)