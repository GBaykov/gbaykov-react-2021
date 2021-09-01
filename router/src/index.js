import React, { useState, useEffect } from 'react';
import ReactDOM, { render } from 'react-dom';

import { SearchBar } from './components/search-bar';
import './style.scss';
import './reset.css';
import  "core-js/stable";
import "regenerator-runtime/runtime";

import { BrowserRouter as Router,
         Route,
         Switch,Link,
         useRouteMatch,
         useParams
        } from 'react-router-dom';

import { About, Header } from './components/header';
import { Details } from './components/details';

window.React = React;

// const App = () => {


//     return(
//       <Router>
//         <div>

//         <Header />

//           <Route path='/' component={SearchBar} />
//           <Route path='/about' component={About} />

//  </div>
//  </Router>
//  )

// };


export default function App() {

  const [title, setTitle] = useState('');

 const handleActive = () =>{
    document.addEventListener((e)=>{
     e.target.className='active';
     alert('active')
    })
  }
  const addArtic = (title) =>{
    alert(title);
    setTitle(title)
  }
  return (
    <Router>
      <div>
      <nav className='header'>
    <ul className='header-nav'>
      <li className="header-li">
        <Link to="/" className="router-link">Home</Link>
      </li>
       <li className="header-li" onClick={handleActive}>
        <Link to="/about" className="router-link" >About</Link>
      </li>
      <li className="header-li">
         <Link  to="/details/" className="router-link">Details</Link>
      </li>
      <li className="header-li">
         <Link to="/details/:id" className="router-link"
         render={()=> <Details />}
         >Details ID</Link>
      </li>

    </ul>
  </nav>

        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          {/* <Route path="/details">
            <Details />
          </Route> */}
          <Route path="/details/:id">
            <Details
            // match={match}
            />
          </Route>
          <Route path="/">
            <SearchBar topArticle={addArtic} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}





const body = document.getElementById('body');
const root = document.getElementById('root');
//ReactDOM.render(<App/>, body);
ReactDOM.render(<App/>, root);
