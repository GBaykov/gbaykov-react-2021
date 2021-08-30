import React from 'react';
import ReactDOM from 'react-dom';
window.React = React;

export const Header = () => {
  return(
<nav className='header'>
    <ul className='header-nav'>
      <li>
        <Link to="/">SearchBar</Link>
      </li>
       <li>
        <Link to="/about">About</Link>
      </li>
      <li>
              <Link to="/users">Users</Link>
            </li>
      {/* <li className='header-li'> About</li>
      <li className='header-li'>SearchBar</li> */}
    </ul>
  </nav>
  )
  };

  export const About = () => (
  <div className="about">
About
  </div>

);
