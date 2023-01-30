import React,{useState , useEffect} from 'react'
// import { BrowserRouter , Router ,  } from 'react-router-dom';
import {Routes , Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import '../styles/App.css';
import Login from './LoginPage'
import SignUp from './SignUp';
import AddAnswerPage from './AddAnswerPage';
import AddQuestion from './AddQuestionPage';
import Welcome from './Welcome';
import Header from './Header';
import Footer from './Footer';
import LoginBtn from './LoginBtn';
import NotFound from './NotFound';

// const hasUserLoggedIn  = JSON.parse(localStorage.getItem('userData')) ? true :  false;


const App = () => {
  const [email , setEmail] = useState();
  const [password , setPassword] = useState();
  const [authenticated , setAuthenticated] = useState(null);
  const navigate = useNavigate();

useEffect(() => {
  const loggedInUser = localStorage.getItem('authenticated');
  if(loggedInUser){
    setAuthenticated(loggedInUser);
  }
},[]);


  return (
    <div id="main">
       <Routes>
          <Route path= "/" element={<Welcome  setAuthenticated={setAuthenticated}/>}/>
          <Route path= "/login" element={<Login  setAuthenticated={setAuthenticated}/>}/>
          <Route path="/register" element={<SignUp  setAuthenticated={setAuthenticated}/>} />
          <Route path="/add-question" element={<AddQuestion/>} />
          <Route path="/add-answer" element={<AddAnswerPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes> 
    </div>
  )
}


export default App;
