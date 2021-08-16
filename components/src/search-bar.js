import React, { Component } from 'react';
import ReactDOM from 'react-dom';
window.React = React;

// export class SearchBar extends Component{

//   render() {
//     return(
//       <div>
//         <input type='text'>
//         </input>
//       </div>
//     )
//   }
// }
export const SearchBar = () => (
  <form action="/" method="get" className="form-group">
      <label htmlFor="header-search">
          <span className="visually-hidden">Search blog posts</span>
      </label>
      <input
          type="text"
          id="header-search"
          placeholder="Search blog posts"
          name="s"
          className="form-control"
      />
      <button type="submit" className="submit">Search</button>
  </form>
);
