import React, { useState, useEffect,Suspense } from 'react';
import ReactDOM, { render } from 'react-dom';



import { SearchBar } from './components/search-bar';
import './style.scss';
import './reset.css';
import  "core-js/stable";
import "regenerator-runtime/runtime";

import { BrowserRouter as Router,
         Route,
         Switch,Link,

        } from 'react-router-dom';

import { Details } from './components/details';
import { About } from './components/about';

window.React = React;

export default function App() {

const [title, setTitle] = useState('');

 const handleActive = () =>{
    document.addEventListener((e)=>{
     e.target.className='active';
     alert('active')
    })
  }

  return (
    <Router>
      <div>
      <nav className='header'>
    <ul className='header-nav'>
      <li className="header-li">
        <Link exact to="/" className="router-link">Home</Link>
      </li>
       <li className="header-li" onClick={handleActive}>
        <Link exact to="/about" className="router-link" >About</Link>
      </li>


    </ul>
  </nav>

        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/details/:id">
            <Details/>
          </Route>
          <Route exact path="/">
            <SearchBar  />
          </Route>
          <Route  path="*">
            <p/>404 NOT FOUND<p/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


const root = document.getElementById('root');
ReactDOM.render(<App/>, root);
