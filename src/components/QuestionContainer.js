import React,{useState} from 'react'

function getFromLocalStorage(){
  const items = localStorage.getItem('question');
  if(items) return JSON.parse(localStorage.getItem('question'))
  else return [];
}

function Question() {
  const [questions , setQuestion] = useState(getFromLocalStorage());
  return (
    <div className='col-sm-6 bg-light m-2 py-5'>
     <h4 className='text-success text-left'>Questions List</h4>
     <div className='question-list'>
      { questions.length > 0 ? 
        <ul className=''>
          {questions.map((ques , index) => <li className="text-success" key={index}>{index + 1} : {ques.text} ?</li>)}
        </ul>
        : <p>No Questions asked Yet</p>
      }
    </div>
    </div>
  )
}

export default Question