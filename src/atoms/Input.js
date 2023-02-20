import React from 'react'

const Input = (props) => {
  return (
    <div className="input-box">
        <input type={props.type} placeholder={props.placeholder} name={props.name}/>
    </div>
  )
}

export default Input