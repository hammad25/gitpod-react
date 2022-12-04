import React from 'react'

function Book(props) {

    // const book  =  props.book
  return (
    <div>
        {/* <h5>{book.title}</h5> */}
        <h5>{props.book.title}</h5>
        <p>{props.book.author}</p>
        <p>{props.book.pages}</p>
    </div>
  )
}

export default Book