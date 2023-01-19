import React from 'react'
import AddAnswer from './AddAnswer'
import AddQuestion from './AddQuestion'
import LoginBtn from './LoginBtn'
import Logo from './Logo'
import SearchBar from './SearchBar'
import Answers from './Answers'
import Question from './Question'
import '../styles/App.css';
function Welcome() {
  return (
    <div className='container  mt-5'>
     <h2 className='text-center mt-100 text-danger'>Quora</h2>
    <div className='' style={{display:"flex" , justifyContent:"space-around" , width:"650px" , margin:"auto"}}>
        <Logo/>
        <SearchBar/>
        <AddQuestion />
        <AddAnswer/>
        <LoginBtn/>
    </div>
    <div className='flex-items row text-center h-100 d-flex justify-content-center border' style={{maxWidth:"900px" , margin:"0 auto"}}>
      <Answers/>
      <Question/>
    </div>
    </div>
  )
}

export default Welcome