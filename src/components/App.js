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

const App = () => {
  const [email , setEmail] = useState();
  const [password , setPassword] = useState();
  const [logged , setLogged] = useState(false);
  const navigate = useNavigate();

  return (
    <div id="main">
       <Routes>
          <Route path= "/" element={logged  ? <Welcome/> : <SignUp setLogged={setLogged}/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/add-question" element={<AddQuestion/>} />
          <Route path="/add-answer" element={<AddAnswerPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes> 
    </div>
  )
}


export default App;
