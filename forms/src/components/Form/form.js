//import s from './Form.module.css'
import React, { useState, useEffect } from "react";

{useState}


export const Form = ()=> {
  const [firstName, setFirstName] = useState('')
  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(firstName)
  }
  return(
    <form onSubmit={handleSubmit}>
      <label className={'s.item'} htmlFor="firstName">
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange ={(event)=>{
                         setFirstName(event.target.value)
          }}/>
      </label>
      <div className={'s.button'}>
        <input type="submit" value='Send'/>
      </div>
    </form>
  )
}
