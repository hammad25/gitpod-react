import React, {useState} from 'react'

function ControlledFormsHooks() {
    const [name, setName ] = useState('');
    const [category, setCategory ] = useState('');
    const [comments, setComments ] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, comments );
    }

  return (
        <div>
          <h2>Please fill out the form below:</h2>
          <form onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor="id-name">Your name</label>
                      <input  
                        onChange={(e)=> setName(e.target.value)} 
                        value={name} 
                        id="id-name" 
                        name="name"
                        type="text" 
                      />
                  </div>
                  <div>
                      <label htmlFor="id-category">Query category</label>
                      <select 
                        onChange={(e)=> setCategory(e.target.value)} 
                        value={category} 
                        name="category" 
                        id="id-category">
                          <option value="website">Website issue</option>
                          <option value="order">Order issue</option>
                          <option value="general">General issue</option>
                      </select>
                  </div>
                  <div>
                      <label htmlFor="id-comment">Comments:</label>
                      <textarea  
                        onChange={(e)=> setComments(e.target.value)} 
                        value={comments} 
                        name="comments" 
                        id="id-comments"></textarea>
                  </div>
                  <input type="submit" value='Submit' />
  
          </form>
        </div>
  )
}

export default ControlledFormsHooks