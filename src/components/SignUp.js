import React,{useState , useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

function getFromLocalStorage(){
  const data = localStorage.getItem('userData');
  if(data)  return JSON.parse(data);
  else return [];
}

function SignUp(props) {
 const navigate = useNavigate();
 const [userName , setUserName] = useState("");
 const [email , setUserEmail] = useState("");
 const [password , setPassword] = useState("");
 const [userData , setUserData] = useState(getFromLocalStorage());
 
function handleSignUp(e){
  e.preventDefault();
  if(userName  == "" || email == "" || password == ""){
    alert("Plese Enter values");
    return;
  }else{
    setUserData({userName , email , password});
    // props.setLogged(true);/
  }

  // if(userData){
  //   navigate('/login');
  // }
  
}

useEffect(() => {
  localStorage.setItem('userData' , JSON.stringify(userData));
 },[userData])

 const style = {
  display : 'flex',
  alignItems:"center",
  justifyContent : "center",
}

 

  return (
     <div className="container my-5 card" style={style}>
     <div className="heading text-center">
        <h2 style={{fontFamily :"Anton" , letterSpacing : "1px"}} className="text-danger">Quora</h2>
        <p>A place to share knowledge and better understand the world</p>
     </div>

     <div className="login-container container my-5  row">
       <div className="col-md-12 pt-3">
         <h5>Sign Up..</h5>
         <form className="my-3" onSubmit={handleSignUp} autoComplete="off">
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

            </div>
            </form>
            <span role="button" className="text-primary" onClick={() =>  navigate('/login')}>Already A User..</span>
       </div>
     </div>
    </div>
  );
}

export default SignUp;
