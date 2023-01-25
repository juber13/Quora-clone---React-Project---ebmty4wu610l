import React,{useState , useEffect} from "react";
import '../styles/login.css';
// import {Link} from 'react-router-dom'
import { useNavigate, useParams } from "react-router-dom";

function getUserDate(){
  const userDate = localStorage.getItem('userDate');
  if(userDate) return JSON.parse(localStorage.getItem('userData'));
  else return [];
}

function SignUp() {
 const navigate = useNavigate();
 const [userName , setUserName] = useState();
 const [email , setUserEmail] = useState();
 const [password , setPassword] = useState();
 const [userDate , setUserData] = useState(getUserDate());
 const goToLoginPage = () => {
   navigate("/");
}

function handleSignUp(e){
  e.preventDefault();
  setUserData({userName , email , password});
  setUserName("");
  setUserEmail("");
  setPassword("");
  //  goToLoginPage();
    // navigate('/');
 }

 useEffect(() => {
  localStorage.setItem('userData' , JSON.stringify(userDate));
 },[userDate])

  return (
     <div className="container my-5 card">
     <div className="heading text-center">
        <h2 style={{color:"red"}}>Quora</h2>
        <p>A place to share knowledge and better understand the world</p>
     </div>

     <div className="login-container container my-5  row">
       <div className="col-md-12 pt-3">
         <h5>Sign Up..</h5>
         <form className="my-3" onSubmit={handleSignUp} autoComplete>
          <div className="form-group">
                <input value={userName} type="text"  required placeholder="UserName" className="form-control" onChange={e => setUserName(e.target.value)}/>
            </div>
            <div className="form-group">
                <input value={email} type="email"  required placeholder="Email" className="form-control" onChange={e => setUserEmail(e.target.value)}/>
            </div>
            <div className="form-group">
                <input value={password} type="password"  required placeholder="Password" className="form-control" onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Sign Up</button>
                <br />

                <span role="button" className="text-primary" onClick={goToLoginPage}>Already A User..</span>
            </div>
            </form>
       </div>
     </div>
    </div>
  );
}

export default SignUp;
