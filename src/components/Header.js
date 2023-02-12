import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Header() {
  const [authenticated , setAuthenticated] = useState(localStorage.getItem("authenticated"));
  const navigate = useNavigate();
  const logOutUser = () => {
      localStorage.removeItem("authenticated");
      navigate('/');
  }


  const userData = JSON.parse(localStorage.getItem('userData')) || false;
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-danger">
    <div className="container-fluid">
      <h3  className="text-white"style={{fontFamily :"Anton" , letterSpacing : "1px"}}>Quora Clone</h3>
      <div className='text-right d-flex align-items-center'>
        <button className='btn btn-sm bg-white text-danger' onClick={logOutUser}>Logout</button>
        
    </div>
    </div>
  </nav>
  )
}

export default Header