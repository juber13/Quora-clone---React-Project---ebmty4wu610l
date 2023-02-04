import React ,{useState , useEffect , useContext} from 'react'

function getQuestionAndAnswerFromLocalStorage(){
  const questionedAndAnswer = localStorage.getItem('questiond');
  if(questionedAndAnswer) return JSON.parse(localStorage.getItem('questiond'))
  else return [];
}


function Answers({value}) {

  const [questiond , setQuestionAndAnswer] = useState(getQuestionAndAnswerFromLocalStorage()); 

  const userNameStyle = {
    margin:0,
    display:"flex",
    alignItems : "center"
  }

  const userContent = {
    textAlign: 'left',
    marginTop: "1rem"
  }

  const userImage = {
    width:"40px",
    height : "40px",
    borderRadius : "50%",
    lineHeight : "40px"
  }

  const answerContainer = {
    height:"65vh",
    overflow : "scroll",
    overflowX : "hidden",
  }



  function CapitalWord(string){
    const word = string.toLowerCase();
    return string.charAt(0).toUpperCase() + word.slice(1);
  }

  function filterItems(items){
    return items.filter((item) => item.question.toLowerCase().includes(value));
  }



  return (
    <div className='col-sm-5 bg-light m-1 py-4' style={answerContainer} id="answer">
    <h4 className='text-left m-3' style={{textAlign : "left"}}>Answers</h4>
    <div className='answer-container'>
      
      {questiond.length > 0 ? filterItems(questiond).map((data , index) => {
        return <div className='content bg-white m-2' key={index} style={{padding : "1rem"}}>
              <div className='user-name' style={userNameStyle}>
                <div className='user-img text-white bg-danger' style={userImage}>{CapitalWord(data.answerdBy.slice(0 , 1))}</div>
                <h5 className='text-primary'>{CapitalWord(data.answerdBy)}</h5>
              </div>
              <div className="user-content" style={userContent}>
                <h6>{CapitalWord(data.question)}</h6>
                <p>{CapitalWord(data.answer)}</p>
              </div>
           </div>
       })
       : <p>There is no Answer of any question to show</p>
      }
     </div>
    </div>
  )
}

export default Answers