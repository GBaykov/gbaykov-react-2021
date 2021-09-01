import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router,
  Route,
  Switch,Link,
  useRouteMatch,
  useParams
 } from 'react-router-dom';
import { Articles } from './articles';

export function Details() {
  let params = useParams();
  const id = params.id
  console.log(params);
  console.log(id);

  return (
    <div>
      {id}
      <h3>Requested topic ID: {id}</h3>
    </div>
  );
}

