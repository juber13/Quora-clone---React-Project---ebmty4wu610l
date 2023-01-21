import React from 'react'
import {Link} from 'react-router-dom'

function AddAnswerPage() {

  function addQuestion(){
    alert("I am working");
  }

  return (
    <div className='container'>
      <h2>Add Answer:</h2>
     <div className="mb-3">
      <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <Link to='/'>
     <button className='btn btn-danger m-2'>Cancel</button>
    </Link>
    <button className='btn btn-danger' onClick={addQuestion}>Add Answer</button>
    </div>
  )
}

export default AddAnswerPage;