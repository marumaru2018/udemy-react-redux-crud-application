import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const greeting = "Hi";
  return (
          <React.Fragment>
          <h1 className="foo">{greeting}</h1>
          <label htmlFor="bar">bar</label>
          <input type="text" onClick={() => {console.log("clicked")}} />
          </React.Fragment>
  );
}

export default App;
