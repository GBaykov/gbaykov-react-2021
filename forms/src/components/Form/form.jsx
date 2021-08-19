//import s from './Form.module.css'
import React, { useState, useEffect } from "react";




export const Form = ({ setFormValues })=> {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [country, setCountry] = useState('Belarus');
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({})

  useEffect(()=>{
    validate()
    err()
  },[agree,firstName, birthDate])

  const validate = () => {
    setErrors({});
    if(firstName === '') {
      setErrors((state)=> ({state, firstName}))
    }
    if(birthDate === '') {
      setErrors((state)=> ({state, birthDate }))
    }
    if(!agree) {
      setErrors((state)=> ({state, agree }))
    }

  }
  const err = () => {
    // if(errors.agree !== undefined) {
    //   console.log(` ${errors.agree} !== undefined`)
    // }else console.log(`errors.agree === ${errors.agree}`) ;

    // if(errors.firstName == '') {
    //   console.log(`${errors.firstName} == ''`)
    // }else console.log(`errors.firstName === ${errors.firstName}`) ;
    // if(errors.birthDate == '') {
    //   console.log(`errors.birthDate !== ${errors.birthDate}`)
    // } else console.log(`errors.birthDate === ${errors.birthDate}`) ;
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
        <b>Name:</b>{errors.firstName === '' &&<span className='error-name'>*name should be filled</span>}
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
        <b>Birth Date:</b>{errors.birthDate === '' &&<span className='error-date'>*date should be filled</span>}
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
        <p>this box i agree...{errors.agree !==undefined && <span className='error-agree'>*agree should be checked</span>}</p>
        <input
          type="checkbox"
          name="agree"
          checked={agree}
          onChange ={()=> setAgree(prev => !prev) }
          //onChange ={()=> agree() }
          />
      </label>
      <div className='submit'>
        <input type="submit" value='Send'/>
      </div>
    </form>
  )
}

// const Agree = () => {

//    if(errors!== undefined){
//     return <span className='error-agree'>*agree should be checked</span>
//    }
// }
