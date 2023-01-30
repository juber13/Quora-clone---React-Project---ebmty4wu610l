import React,{useState , useEffect} from 'react'
// import { BrowserRouter , Router ,  } from 'react-router-dom';
import {Routes , Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

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
import Data from './Data'

// const hasUserLoggedIn  = JSON.parse(localStorage.getItem('userData')) ? true :  false;


const App = () => {
  const [email , setEmail] = useState();
  const [password , setPassword] = useState();
  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(localStorage.getItem('authenticated'));
   
  useEffect(() => {    
    if(authenticated) navigate('/')
    else navigate('/login')
  },[])
    
  return (
    <div id="main">
      <Routes>
          <Route path= "/" element={<Welcome />}/>
          <Route path= "/login" element={<Login />}/>
          <Route path="/register" element={<SignUp />} />
          <Route path="/data" element={<Data />} />
          <Route path="/add-question" element={<AddQuestion/>} />
          <Route path="/add-answer" element={<AddAnswerPage />} />
          <Route path='*' element={<NotFound />} />
          </Routes> 
    </div>
  )
}


export default App;
