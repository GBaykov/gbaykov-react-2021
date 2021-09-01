import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router,
  Route,
  Switch,Link,
  useRouteMatch,
  useParams
 } from 'react-router-dom';
import { Articles } from './articles';

export function Details({title, sendTitle}) {
  sendTitle()
  //let match = useRouteMatch();
  //const t =match.title;
  // console.log(match);
  console.log(title);
  //console.log(t);
  return (
    <div>
      {title}
{/* <div className="card " >
        <div className="card-img-container" >
          <img className="card-img" src={`${IMG_URL}/${image}`}/>
        </div>
        <div className="card-text-container" >
          <p className="card-name"><b>Word: </b>{word}</p>
          <p className="card-translation"><b>Translation: </b> {translation}</p>
        </div>

      </div> */}
    </div>
  );
}

export function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
