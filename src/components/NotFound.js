import React from 'react'
function NotFound() {
const style = {
    display : 'flex',
    alignItems:"center",
    justifyContent : "center",
    height : "100vh",
}

  return (
    <>
    <div style={style}>
     <img  style={{mixBlendMode : "hard-light"}} src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1" alt="not-found" />
    </div>
    </>
  )
}

export default NotFound