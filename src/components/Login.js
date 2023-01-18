import React from "react";
import '../styles/login.css';


function Login() {
  return (
     <div className="container my-5 card">
     <div className="heading text-center">
        <h2>Quora</h2>
        <p>A place to share knowledge and better understand the world</p>
     </div>

     <div className="login-container container my-5  row">
       <div className="col-md-6 pt-3 sign-up">
          <h5>Sign Up</h5>
          <form className="my-3">
            <div className="form-group">
              <input type="text" placeholder="Name" className="form-control"/>
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" className="form-control"/>
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" className="form-control"/>
            </div>
            <div className="form-group">
              <input type="password" placeholder="Confirm-password" className="form-control"/>
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-success">Sign Up</button>
            </div>
            </form>
       </div>
       <div className="col-md-6 pt-3">
         <h5>Login</h5>
         <form className="my-3">
            <div className="form-group">
                <input type="email" placeholder="Email" className="form-control"/>
            </div>
            <div className="form-group">
                <input type="password" placeholder="Password" className="form-control"/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Login</button>
            </div>
            </form>
       </div>
     </div>
    </div>
  );
}

export default Login;
