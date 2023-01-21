import React from 'react'
import {Link} from 'react-router-dom'

function AddQuestion() {
  return (
    <div className=''>
        <Link to="/add-question">
           <button className='btn btn-danger'>Add Question</button>
        </Link>
    </div>
  )
}

export default AddQuestion