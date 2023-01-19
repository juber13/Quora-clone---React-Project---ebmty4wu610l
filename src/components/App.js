import React,{useState} from 'react'
import '../styles/App.css';
import Login from './Login'
import Welcome from './Welcome';
const App = () => {
  const [email , setEmail] = useState();
  const [password , setPassword] = useState();
  const [logged , setLogged] = useState(Boolean(localStorage.getItem('name')));
  
  function handleSummit(e){
   e.preventDefault();
    if(email == localStorage.getItem('email') && password == localStorage.getItem('password'))
       setLogged(true);
      // console.log(`welcome u r rock ${localStorage.getItem('name')}`)
       
    else
       console.log("Email or password is invalid");
  }

  return (
    <div id="main">
      {logged ? <Welcome /> : <Login handleSummit={handleSummit} email={setEmail} password={setPassword}/>}
    </div>
  )
}


export default App;
