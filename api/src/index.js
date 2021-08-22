import React from 'react';
import ReactDOM from 'react-dom';
import { MakeCardField } from './components/card';
import { SearchBar } from './components/search-bar';
import './style.scss';

window.React = React;

const App = () => (
  <div>
    <SearchBar/>
    <MakeCardField/>
  </div>

);

const root = document.getElementById('root');
ReactDOM.render(<SearchBar/>, root);
