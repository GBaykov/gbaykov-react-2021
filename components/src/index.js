import React from 'react';
import ReactDOM from 'react-dom';
import { MakeCardField } from './card';
import { SearchBar } from './search-bar';
import './style.scss';

window.React = React;

const App = () => (
  <div>
    <SearchBar/>
    <MakeCardField/>
  </div>

);

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);
