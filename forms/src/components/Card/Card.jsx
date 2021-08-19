import React, { useState } from 'react';
import ReactDOM from 'react-dom';


export const Card = ({item}) => {
  return (
    <div className='card'>
      <p>firstName: {item.firstName}</p>
      <p>lastName: {item.lastName}</p>
      <p>birthDate: {item.birthDate}</p>
      <p>country: {item.country}</p>
    </div>

  );
}
