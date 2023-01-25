import React , {useState} from 'react'
import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function getQuestionFromLocalStorage(){
  const items = localStorage.getItem('question');
  if(items) return JSON.parse(localStorage.getItem('question'))
  else return [];
}

function getQuestionAndAnswerFromLocalStorage(){
  const questiond = localStorage.getItem('questiond');
  if(questiond) return JSON.parse(localStorage.getItem('questiond'))
  else return [];
}

function AddAnswerPage() {
  const [questions , setQuestion] = useState(getQuestionFromLocalStorage());
  const [questionedAndAnswer , setQuestionAndAnswer] = useState(getQuestionAndAnswerFromLocalStorage());
  const [SelectedQuestion , setSelectedQuestion] = useState();
  const [inputVal , setInputval] = useState("");
  const navigate = useNavigate();


  function addQuestion(){
    if(inputVal === "") {
      alert("Please Add Answer");
      return;
    }else{

      setQuestionAndAnswer([...questionedAndAnswer , {
        id: Math.floor(Math.random() + 1 * 100),
        answerdBy : JSON.parse(localStorage.getItem('userData')).userName,
        questionedBy : questionedAndAnswer.answerdBy,
        question : SelectedQuestion,
        answer : inputVal,
      }]
      )
    }

     setInputval("");
  }

  useEffect(() => {
    localStorage.setItem('questiond' , JSON.stringify(questionedAndAnswer));
  },[questionedAndAnswer])



  const selectQuestion = (e) => {
    setSelectedQuestion(e.target.innerHTML);
  }

  return (
    <div className='container mt-5' style={{backgroundColor : "#ddd"}}>
     <div className="row">
      <div className='col-5  pt-10'>
        <h5>Select Questions</h5>
        <ul>
          {questions.map((ques ,  index) => <li onClick={selectQuestion}key={index}>{ques.text}</li>)}
        </ul>
      </div>
      <div className='col-5  pt-10'>
      <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
      <textarea required value={inputVal} onChange={(e) => setInputval(e.target.value)} className="form-control" placeholder={SelectedQuestion} id="exampleFormControlTextarea1" rows="3"></textarea>  
      <Link to='/main'>
      <button className='btn btn-danger m-2'>Cancel</button>
      </Link>
      <button className='btn btn-danger' onClick={addQuestion}>Add Answer</button>
      </div>
    </div>
    </div>
  )
}

export default AddAnswerPage;