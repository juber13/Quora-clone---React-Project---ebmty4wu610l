import React from 'react'
import AddAnswer from './AnswerBtn'
import AddQuestion from './QuestionBtn'
import LoginBtn from './LoginBtn'
import Logo from './Logo'
import SearchBar from './SearchBar'
import Answers from './AnswersContainer'
import Question from './QuestionContainer'
import '../styles/App.css';

function Welcome() {
  return (
     <div className='container  mt-5'>
     <div className='' style={{display:"flex" , justifyContent:"space-around" , width:"650px" , margin:"auto"}}>
        <Logo/>
        <SearchBar/>
        <AddAnswer/>
        <AddQuestion />
    </div>
    <div className='flex-items row text-center h-100 d-flex justify-content-center' style={{maxWidth:"900px" , margin:"4px auto"}}>
      <Answers/>
      <Question/>
    </div>
    </div>
  )
}

export default Welcome