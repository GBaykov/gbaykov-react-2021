import React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardField } from './card';
import { SearchBar } from './search-bar';
import './style.scss'
window.React = React;


const App = () => {
  return (
    <div>
<SearchBar/>
<CardField/>
    </div>

  );
}

const tag = document.getElementById('root');
ReactDOM.render(<App/>, tag);
