import React from 'react';
import ReactDOM from 'react-dom';

import { SearchBar } from './components/search-bar';
import './style.scss';
import './reset.css';
import  "core-js/stable";
import "regenerator-runtime/runtime";

window.React = React;

const App = () => (
  <div>

  </div>

);

const root = document.getElementById('root');
ReactDOM.render(<SearchBar/>, root);
