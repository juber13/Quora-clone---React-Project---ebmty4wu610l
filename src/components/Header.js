import React from 'react'
import Logo from './Logo';

function Header() {
  const userData = JSON.parse(localStorage.getItem('userData')) || false;
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-danger">
    <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">Quora Clone</a>
        <h6 className='text-white'>Welcome {userData.userName}</h6>
  </div>
</nav>
  )
}

export default Header