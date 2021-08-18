//import s from './Form.module.css'
import React, { useState, useEffect } from "react";

{useState}


export const Form = ({ setFormValues })=> {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [country, setCountry] = useState('Belarus');
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({})

  useEffect(()=>{
    validate()
  },[agree,firstName, birthDate])

  const validate = () => {
    setErrors({});
    if(!agree) {
      setErrors((state)=> ([...state, agree]))
    }
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    if(Object.keys(errors).length===0){
      setFormValues((state)=> [...state, {firstName,lastName,birthDate,country,agree}])
    }
  }


  return(
    <form className="form" onSubmit={handleSubmit}>
      <label className='s.item ' htmlFor="firstName">
        <b>Name:</b>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange ={(event)=>{
                         setFirstName(event.target.value)
          }}
          />
      </label>
      <label className={'s.item'} htmlFor="lastName">
        <b>Surname:</b>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange ={(event)=>{
                         setLastName(event.target.value)
          }}
        />
      </label>
      <label className={'s.item'} htmlFor="birthDate">
        <b>Birth Date:</b>
        <input
          type="date"
          name="birthDate"
          value={birthDate}
          onChange ={(event)=>{
                         setBirthDate(event.target.value)
          }}
          />
      </label>
      <label className={'s.item'} htmlFor="country">
        <b>Country:</b>
        <select
          name="country"
          value={country}
          onChange ={(event)=>{
                         setCountry(event.target.value)
          }}>
             <option>Russia</option>
             <option>Belarus</option>
             <option>Ukraine</option>
          </select>
      </label>
      <label className={'s.agree'} htmlFor="agree">
        <b>this box i agree...</b>
        <input
          type="checkbox"
          name="agree"
          checked={agree}
          onChange ={()=> setAgree(prev => !prev) }
          />
      </label>
      <div className='submit'>
        <input type="submit" value='Send'/>
      </div>
    </form>
  )
}
