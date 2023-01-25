import React,{useState} from 'react'
// import { BrowserRouter , Router ,  } from 'react-router-dom';
import {Routes , Route } from 'react-router-dom';

import '../styles/App.css';
import Login from './LoginPage'
import SignUp from './SignUp';
import AddAnswerPage from './AddAnswerPage';
import AddQuestion from './AddQuestionPage';
import Welcome from './Welcome';
import Header from './Header';
import Footer from './Footer';
import LoginBtn from './LoginBtn';

const App = () => {
  const [email , setEmail] = useState();
  const [password , setPassword] = useState();
  const [logged , setLogged] = useState(Boolean(localStorage.getItem('name')));

  return (
    <div id="main">
      <Header/>
       <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/sign-up' element={<SignUp />} />
          <Route path="/main" element={<Welcome />} />
          <Route path="/add-question" element={<AddQuestion/>} />
          <Route path="/add-answer" element={<AddAnswerPage />} />
        </Routes> 
      <Footer/>
    </div>
  )
}


export default App;
