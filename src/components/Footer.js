import React,{useState} from 'react'

function Footer() {
  const [time , setTime] = useState();
  const timeNow = new Date().toLocaleString(); 
  setTimeout(() => {
    setTime(timeNow);
  },1000)
  return (
    <footer className='fixed-bottom bg-danger text-white text-center'>
        <ul className='display-inline'>
            <li>@copy:</li>
            <li>currentTime :{time}</li>
        </ul>
    </footer>
  )
}

export default Footer