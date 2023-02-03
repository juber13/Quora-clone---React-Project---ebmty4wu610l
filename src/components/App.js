import React,{useState , useEffect , createContext} from 'react'
import {Routes , Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import '../styles/App.css';
import Login from './LoginPage'
import SignUp from './SignUp';
import AddAnswerPage from './AddAnswerPage';
import AddQuestion from './AddQuestionPage';
import Welcome from './Welcome';
import NotFound from './NotFound';
import ExampleText from '../Example';



const App = () => {
  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(localStorage.getItem('authenticated'));
  const [flashMessage , setFlasmessage] = useState(false);
   
  useEffect(() => {    
    if(authenticated) navigate('/')
    else navigate('/login')
  },[])
    
  return (
    // <ExampleText.Provider value="econd">
    <div id="main">
      <Routes>
          <Route path= "/" element={<Welcome flashMessage={flashMessage}/>}/>
          <Route path= "/login" element={<Login setFlasmessage={setFlasmessage}/>}/>
          <Route path="/register" element={<SignUp setFlasmessage={setFlasmessage}/>}/>
          <Route path="/add-question" element={<AddQuestion/>} />
          <Route path="/add-answer" element={<AddAnswerPage />} />
          <Route path='*' element={<NotFound />} />
      </Routes> 
    </div>
    // </ExampleText.Provider>
  )
}


export default App;
