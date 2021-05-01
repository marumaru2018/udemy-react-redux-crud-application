import React from 'react';
import logo from './logo.svg';
import './App.css';

//function App() {
const App = () => {
const greeting = "Hi";
  return (
          <React.Fragment>
          <h1 className="foo">{greeting}</h1>
          <label htmlFor="bar">bar</label>
          <input type="text" onClick={() => {console.log("clicked")}} />
          <Cat />
          <Cat />
          <Cat />
          </React.Fragment>
  );
}
const Cat = () => {
  return (
    <div>
      Meow
    </div>
  );
}

export default App;
