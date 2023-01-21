import React from 'react'
import {Link} from 'react-router-dom'
function AddAnswer() {
  return (
    <div className=''>
        <Link to='/add-answer'>
          <button className='btn btn-danger'>Add Answer</button>
        </Link>
    </div>
  )
}

export default AddAnswer