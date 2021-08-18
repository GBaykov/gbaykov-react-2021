import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Card } from './components/Card/Card.jsx';
import { Form } from './components/Form/form.jsx';

 import './style.scss'
 window.React = React;


export const App = () => {
  const [formvalues, setFormValues] = useState([])
  return (
    <div className='App'>
      <Form setFormValues={setFormValues}/>
      <main>
        {formvalues.map((item, idx)=>{
          return <Card item = {item} key={idx}/>
        })}
      </main>
    </div>

  );
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);
