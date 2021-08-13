import React, { Component } from 'react';
import ReactDOM from 'react-dom';
window.React = React;

export class Card extends Component {
  render(){
    return(
      <div
      className="card">
        <p>Name: Igoooooog</p>
        <p>Surname: Panamov</p>
        <p>Age: 34</p>
      </div>
    )
  }
}

export const CardField =()=> {

    return(
<div className="card-field">
<Card/>
<Card/>
<Card/>
<Card/>
    </div>
    )
}
