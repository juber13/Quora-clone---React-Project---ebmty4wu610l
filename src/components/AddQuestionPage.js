import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Answers from './AnswersContainer';
function AddQuestion() {
  const [value , setValue] = useState();
  const [question , setQuestion] = useState([]);
    const addQuestion = () => {
      setQuestion([...question , value]);
    }

  return (
    <div className='container'>
     <h2>Answer Question:</h2>
    <div className="mb-3">
      <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
      <textarea  value={value} className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setValue(e.target.value)}></textarea>
    </div>
    <Link to="/">
      <button className='btn btn-danger m-2'>Cancel</button>
    </Link>
    <button className='btn btn-danger' onClick={addQuestion}>Add Question</button>
  </div>
  )
}

export default AddQuestion