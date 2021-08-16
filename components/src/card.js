import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { AUDIO_URL, IMG_URL } from './constants';
import { DATA_OF_CARDS } from './data';
window.React = React;



export class CardE extends Component {
  render() {
    const { word, image, translation } = this.props;
    const img = `${IMG_URL}/${image}`
    return(
      <div className="card " id="card-${word}">
        <div className="card-img-container" >
             <img className="card-img" src={`${IMG_URL}/${image}`}/>
          </div>
          <div className="card-text-container" >
            <p className="card-name"><b>Word: </b>{word}</p>
            <p className="card-translation"><b>Translation: </b> {translation}</p>
          </div>

      </div>
  )
  }
}
export const MakeCardField =()=> {
  const arr = DATA_OF_CARDS[6];
   const elements = arr.map((item) => {
    return (
      <div className ="card-container">
        <CardE
         word ={item.word}
         image = {item.image}
         translation = {item.translation}
        />
      </div>
    );
  });
  return (
    <div >
      { elements }
    </div>
  );
};
