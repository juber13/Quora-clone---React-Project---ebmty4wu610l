import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Login.css';

function getUserDate(){
  const userDate = localStorage.getItem('userData');
  if(userDate) return JSON.parse(localStorage.getItem('userData'));
  else return [];
}


function Login({setLogged}) {
  const navigate = useNavigate();

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [userData , setUserData] = useState(getUserDate());

  function handleLogin(e){
    e.preventDefault();
    if(email == userData.email && password == userData.password){
      setLogged(true);
      navigate('/main')
    }else{
      alert("please sign up first");
      return;
    }
 }

 const style = {
   
 }

  return (
     <div className="container card">
     <div className="heading text-center">
        <h1  className="text-danger"style={{fontFamily :"Anton" , letterSpacing : "1px"}}>Quora</h1>
        <p style={{}}>A place to share knowledge and better understand the world</p>
     </div>

     <div className="login-container container my-5  row">
       <div className="col-md-12 pt-3">
         <h5>Login</h5>
         <form className="my-3" onSubmit={handleLogin} autoComplete="off">
            <div className="form-group">
                <input value={email} type="email"  required placeholder="Email" className="form-control"   onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
                <input value={password} type="password"  required placeholder="Password" className="form-control"  onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Login</button>
            </div>
            </form>
            <span role="button" className="text-primary cursor-pointer" onClick={() =>  navigate('/')}>Sign Up Here..</span>

       </div>
     </div>
    </div>
  );
}

export default Login;
