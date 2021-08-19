//import s from './Form.module.css'
import React, { useState, useEffect } from "react";




export const Form = ({ setFormValues })=> {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [country, setCountry] = useState('');
  const [agree, setAgree] = useState(false);
  const [sex, setSex] = useState(false);
  const [errors, setErrors] = useState({})

  useEffect(()=>{
    validate()

  },[firstName,lastName, birthDate, country,sex, agree,])



  const validate = () => {
    setErrors({});
    if(firstName.length < 3) {
      setErrors((state)=> ({state, firstName}))

    }
    if(lastName.length < 3) {
      setErrors((state)=> ({state, lastName}))
    }
    if(birthDate === '') {
      setErrors((state)=> ({state, birthDate }))
    }
    if(country === '') {
      setErrors((state)=> ({state, country }))
    }
    // if(!sex) {
    //   setErrors((state)=> ({state, sex }))
    // }
    if(!agree) {
      setErrors((state)=> ({state, agree }))
    }

  }
  const reset = () => {
   setFirstName('');
   setLastName('')
   setBirthDate('');
   setCountry('');
   setSex(false);
   setAgree(false)
  }

  const handleSubmit = (event)=>{
    event.preventDefault();

    if(Object.keys(errors).length===0){
      setFormValues((state)=> [...state, {firstName,lastName,birthDate,country,sex,agree}])
      reset()
    }
  }


  return(
    <form className="form" onSubmit={handleSubmit}>
      <label className='s.item ' htmlFor="firstName">
        <b>Name:</b>{(firstName.length <3) &&<span className='error-name'>*name length should be 3+</span>}
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
        <b>Surname:</b>{lastName.length < 3 &&<span className='error-agree'>*surname length should be 3+</span>}
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
        <b>Country:</b>{errors.country === '' &&<span className='error-name'>*country should be filled</span>}
        <select
          name="country"
          value={country}
          onChange ={(event)=>{
                         setCountry(event.target.value)
          }}>
             <option></option>
             <option>Russia</option>
             <option>Belarus</option>
             <option>Ukraine</option>
          </select>
      </label>

      <label className="checkbox-green">
        <b>Choose your sex:</b>{errors.sex !==undefined && <span className='error-agree'>***</span>}
	      <input
        type="checkbox"
        name="sex"
        checked={sex}
        onChange ={()=> setSex(prev => !prev) }
        />
	       <span className="checkbox-green-switch" data-label-on="Female" data-label-off="Male"></span>
      </label>

      <label className='agree' htmlFor="agree">
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
