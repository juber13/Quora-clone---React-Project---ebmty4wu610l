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
      setQuestion((prev) => {
        return [...prev , {text : inputValue , answerd : false}];
      })    
      setValue("");
    }

    useEffect(() => {
      localStorage.setItem('question' , JSON.stringify(questions))
    },[questions]);

  return (
    <div className='container'>
     <h2>Answer Question:</h2>
    <div className="mb-3">
      <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
      <textarea  value={inputValue} className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setValue(e.target.value)}></textarea>
    </div>
    <Link to="/main">
      <button className='btn btn-danger m-2'>Cancel</button>
    </Link>
    <button className='btn btn-danger' onClick={addQuestion}>Add Question</button>
  </div>
  )
}

export default AddQuestion