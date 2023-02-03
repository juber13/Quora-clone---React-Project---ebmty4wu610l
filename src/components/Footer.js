import React,{useState} from 'react'

function Footer() {
  const [time , setTime] = useState();
  const timeNow = new Date().toLocaleString(); 
  setTimeout(() => {
    setTime(timeNow);
  },1000)
  return (
    <footer className='fixed-bottom bg-danger text-white text-center pt-2 h-56' style={{height:"55px"}}>
        <ul className='display-inline'>
            <li>@Copy</li>
            <li>currentTime : {time}</li>
        </ul>
    </footer>
  )
}

export default Footer