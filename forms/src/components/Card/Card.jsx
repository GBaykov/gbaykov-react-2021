import React, { useState } from 'react';
import ReactDOM from 'react-dom';


export const Card = ({item}) => {
  let sex = 'male';
  if(item.sex === true) {
    sex ='female'
  }
  return (
    <div className='card'>
      <p>firstName: {item.firstName}</p>
      <p>lastName: {item.lastName}</p>
      <p>birthDate: {item.birthDate}</p>
      <p>country: {item.country}</p>
      <p>sex: {sex}</p>
    </div>

  );
}
