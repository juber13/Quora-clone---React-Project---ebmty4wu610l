import React,{useEffect, useState} from 'react'
import Logo from './Logo';

function Header() {
  
  const logOutUser = () => {
    console.log("woring");
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