import React,{useState , useEffect} from 'react'
import {Routes , Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import '../styles/App.css';
import Login from './LoginPage'
import SignUp from './SignUp';
import AddAnswerPage from './AddAnswerPage';
import AddQuestion from './AddQuestionPage';
import Welcome from './Welcome';
import NotFound from './NotFound';



const App = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(localStorage.getItem('authenticated'));
   
  useEffect(() => {    
    if(authenticated) navigate('/dashboard')
    else navigate('/login')
  },[authenticated])
    
  return (
    <div id="main">
      <Routes>
          <Route path= "/dashboard" element={<Welcome/>}/>
          <Route path= "/login" element={<Login/>}/>
          <Route path="/register" element={<SignUp />}/>
          <Route path="/add-question" element={<AddQuestion/>} />
          <Route path="/add-answer" element={<AddAnswerPage />} />
          <Route path='*' element={<NotFound />} />
      </Routes> 
    </div>
  )
}


export default App;
