import React from 'react';
import ReactDOM from 'react-dom';
// const React = require('react');
// const ReactDOM = require('react-dom');
// import React from 'react'
// import { render } from 'react-dom'
window.React = React;

function Fear() {
  return (<h1>Woohoo!</h1>);
}

const tag = document.getElementById('root');
console.log(React);
console.log(ReactDOM);
console.log(Fear);
console.log(tag);
ReactDOM.render(<Fear/>, tag);
