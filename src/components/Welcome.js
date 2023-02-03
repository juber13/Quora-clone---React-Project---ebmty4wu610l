import React, { useState } from 'react'
import '../styles/App.css';

import AddAnswer from './AnswerBtn'
import AddQuestion from './QuestionBtn'
import Logo from './Logo'
import Answers from './AnswersContainer'
import Question from './QuestionContainer'
import Header from './Header'
import Footer from './Footer'

function Welcome() {
  const [filterItem , setFilterItem]  = useState('');
  return (
    <>
    <Header/>
     <div className='container  mt-5'>
     <div className='' style={{display:"flex" , justifyContent:"space-around" , width:"650px" , margin:"auto"}}>
        <Logo/>
        <div className=''>
           <input type="text" value={filterItem} placeholder='search for questions...'  className='form-control' onChange={(e) => setFilterItem(e.target.value)}/>
       </div>
        <AddAnswer />
        <AddQuestion />
    </div>
    <div className='flex-items row text-center h-100 d-flex justify-content-center' style={{maxWidth:"900px" , margin:"4px auto"}}>
      <Answers value={filterItem}/>
      <Question/>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Welcome