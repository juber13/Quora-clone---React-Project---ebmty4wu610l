import React from 'react'
import {Link} from 'react-router-dom';
function LoginBtn() {
  return (
    <div className=''>
        {/* <Link to="/login"> */}
          <button className='btn text-danger bg-white'>Login</button>
        {/* </Link> */}
    </div>
  )
}

export default LoginBtn