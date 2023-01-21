import React,{useState} from 'react'
// import { BrowserRouter , Router ,  } from 'react-router-dom';
import { BrowserRouter , Routes , Route } from 'react-router-dom';


import '../styles/App.css';
import Login from './LoginPage'
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

  
  // function handleSummit(e){
  //  e.preventDefault();
  //   if(email == localStorage.getItem('email') && password == localStorage.getItem('password'))
  //      setLogged(true);
  //     // console.log(`welcome u r rock ${localStorage.getItem('name')}`)
       
  //   else
  //      console.log("Email or password is invalid");
  // }

  return (
    <div id="main">
      {/* {logged ? <Welcome /> : <Login handleSummit={handleSummit} email={setEmail} password={setPassword}/>} */}
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/add-question" element={<AddQuestion/>} />
          <Route path="/add-answer" element={<AddAnswerPage />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}


export default App;
