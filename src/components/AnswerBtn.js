import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function AddAnswer() {
  const navigate = useNavigate();
  const [question , setQuestion] = useState()
  const checkDataInLocalStorage = () =>{
    if(localStorage.getItem('question')){
       navigate('/add-answer');
    }else{
      alert("Please add question first");
      return;
    }
  }
  return (
    <div className=''>
          <button className='btn btn-danger' onClick={checkDataInLocalStorage}>Add Answer</button>
    </div>
  )
}

export default AddAnswer