import React,{useState , useEffect} from 'react'
import {Link} from 'react-router-dom'
import Answers from './AnswersContainer';

function getFromLocalStorage(){
  const items = localStorage.getItem('question');
  if(items) return JSON.parse(localStorage.getItem('question'))
  else return [];
}

function AddQuestion() {
  const [questions , setQuestion] = useState(getFromLocalStorage());
  const [inputValue , setValue] = useState();
    
  const addQuestion = () => {
    if(inputValue === "") {
      alert("Please Add Question");
      return;
    }else{
      setQuestion((prev) => {
        return [...prev , {text : inputValue , answerd : false}];
      })    
    }
    
    setValue("");
  }
    
    useEffect(() => {
      localStorage.setItem('question' , JSON.stringify(questions))
    },[questions]);

  return (
    <div className='container'>
     <h2>Add Question:</h2>
    <div className="mb-3">
      <label for="exampleFormControlTextarea1" className="form-label">Write Your Question Here!!!</label>
      <textarea  required value={inputValue} className="form-control" id="exampleFormControlTextarea1" rows="13" cols="10" onChange={(e) => setValue(e.target.value)}></textarea>
    <Link to="/main">
      <button className='btn btn-danger m-2'>Cancel</button>
    </Link>
    <button className='btn btn-danger' onClick={addQuestion}>Add Question</button>
   </div>
  </div>
  )
}

export default AddQuestion