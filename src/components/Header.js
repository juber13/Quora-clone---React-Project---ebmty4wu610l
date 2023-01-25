import React from 'react'
import Logo from './Logo';
import LoginBtn from './LoginBtn';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-danger">
    <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">Quora Clone</a>
       {/* <LoginBtn/> */}
  </div>
</nav>
  )
}

export default Header