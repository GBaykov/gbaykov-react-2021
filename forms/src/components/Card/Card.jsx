import React, { useState } from 'react';
import ReactDOM from 'react-dom';


export const Card = ({item}) => {
  return (
    <div className='card'>
      <p> {item.firstName}</p>
      <p> {item.lastName}</p>
      <p> {item.birthDate}</p>
      <p> {item.country}</p>
      <p> {item.agree}</p>
    </div>

  );
}
