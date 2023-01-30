import React ,{useState} from 'react'

function getQuestionAndAnswerFromLocalStorage(){
  const questionedAndAnswer = localStorage.getItem('questiond');
  if(questionedAndAnswer) return JSON.parse(localStorage.getItem('questiond'))
  else return [];
}


function Answers() {

  const [questiond , setQuestionAndAnswer] = useState(getQuestionAndAnswerFromLocalStorage());
  return (
    <div className='col-sm-5 bg-light m-2'>
    <h2>Answers</h2>
    <div className='answer-container'>
      {questiond.map((data , index) => {
        return <div className='content bg-white' key={index}>
        <img src="" alt="" />
        <h5>{data.answerdBy}</h5>
        <h6>{data.question}</h6>
        <p>{data.answer}</p>
      </div>
      })
      }
     </div>
    </div>
  )
}

export default Answers