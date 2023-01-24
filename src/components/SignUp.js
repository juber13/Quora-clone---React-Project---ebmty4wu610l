import React,{useState} from "react";
import '../styles/login.css';
import {Link} from 'react-router-dom'

function SignUp(props) {
 
  return (
     <div className="container my-5 card">
     <div className="heading text-center">
        <h2 style={{color:"red"}}>Quora</h2>
        <p>A place to share knowledge and better understand the world</p>
     </div>

     <div className="login-container container my-5  row">
       <div className="col-md-12 pt-3">
         <h5>Sign Up..</h5>
         <form className="my-3" onSubmit={props.handleSummit} autoComplete>
          <div className="form-group">
                <input type="text"  required placeholder="UserName" className="form-control" onChange={e => props.email(e.target.value)}/>
            </div>
            <div className="form-group">
                <input type="email"  required placeholder="Email" className="form-control" onChange={e => props.email(e.target.value)}/>
            </div>
            <div className="form-group">
                <input type="password"  required placeholder="Password" className="form-control" onChange={e => props.password(e.target.value)}/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </div>
            </form>
       </div>
     </div>
    </div>
  );
}

export default SignUp;
