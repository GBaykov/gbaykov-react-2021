import React from 'react';
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
//         {/* <Switch>
//           <Route path="/2">
//             <About />
//           </Route>
//           <Route path="/1">
//             <SearchBar />
//           </Route>
//         </Switch> */}
//           {/* <Route path='/' component={SearchBar} />
//           <Route path='/about' component={About} /> */}

//  </div>
//  </Router>
//  )

// };
export default function App() {
  return (
    <Router>
      <div>
      <nav className='header'>
    <ul className='header-nav'>
      <li>
        <Link to="/">Home</Link>
      </li>
       <li>
        <Link to="/about">About</Link>
      </li>
      <li>
              <Link to="/details">Details</Link>
            </li>
            <li>
            <Link to="/topics">Topics</Link>
          </li>
    </ul>
  </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/">
            <SearchBar />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}



const body = document.getElementById('body');
const root = document.getElementById('root');
//ReactDOM.render(<App/>, body);
ReactDOM.render(<App/>, root);
