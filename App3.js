// logo from './logo.svg';
import React, {Component} from 'react';

import './App.css';

function App() {
 // return (
  
  //  <div className='App'>
   //   <h1> Hello world !!</h1>
  //  </div>
  
 // );

  return React.createElement(
    'div',
    {
      className: 'App'
    },
    React.createElement(
      'h1',
      null,
      'Hello world !!'
    )
   
  )
}

export default App;
