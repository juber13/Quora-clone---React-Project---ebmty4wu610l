import React,{useEffect , useState} from 'react'

function getFromLocalStorage(){
  const items = localStorage.getItem('question');
  if(items) return JSON.parse(localStorage.getItem('question'))
  else return [];
}

function Question() {
  const [questions , setQuestion] = useState(getFromLocalStorage());
  return (
    <div className='col-sm-6 bg-light m-2'>
     <h2>Question List</h2>
     <div className='question-list'>
        <ul className=''>
          {questions.map((ques , index) => <li className="text-success" key={index}>{ques.text} ?</li>)}
        </ul>
    </div>
    </div>
  )
}

export default Question