import React from 'react'

function FlashMessage(props) {
  return (
    <div className="floating-alerts" role="alert">
        <div className="alert alert-success text-center floating-alert shadow-sm">{props.text} Is showing</div>
  </div>
  )
}

export default FlashMessage