import React,{useState} from "react";
import '../styles/login.css';
// import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function getUserDate(){
  const userDate = localStorage.getItem('userData');
  if(userDate) return JSON.parse(localStorage.getItem('userData'));
  else return [];
}

function Login(props) {
  const navigate = useNavigate();
  const goToSignUpPage = () => navigate('/sign-up');
  const [email , setEmail] = useState();
  const [password , setPassword] = useState();
  const [userData , setUserData] = useState(getUserDate());

  function handleLogin(e){
    e.preventDefault();
    if(email == userData.email && password == userData.password){
      navigate('/main');
    }else{
      alert("plese sign up first");
    }
 }

  return (
     <div className="container my-5 card">
     <div className="heading text-center">
        <h2 style={{color:"red"}}>Quora</h2>
        <p>A place to share knowledge and better understand the world</p>
     </div>

     <div className="login-container container my-5  row">
       <div className="col-md-12 pt-3">
         <h5>Login</h5>
         <form className="my-3" onSubmit={handleLogin} autoComplete>
            <div className="form-group">
                <input type="email"  required placeholder="Email" className="form-control"  value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
                <input type="password"  required placeholder="Password" className="form-control" value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Login</button>
                {/* <Link to="/sign-up"> */}
                  <h6 className="text-primary mt-3 cursor-pointer" role="button" onClick={goToSignUpPage}>Sign Up Here..</h6>
                {/* </Link> */}
            </div>
            </form>
       </div>
     </div>
    </div>
  );
}

export default Login;
