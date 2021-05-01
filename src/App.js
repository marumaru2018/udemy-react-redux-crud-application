import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {count:0}
  }

  handlePlusButton = () =>{
    console.log("handlePlusButton="+this.state.count)
    this.setState({count: this.state.count + 1})
  }
  handleMinusButton = () =>{
    console.log("handleMinusButton="+this.state.count)
    this.setState({count: this.state.count - 1})
  }

  render(){
    return(
      <React.Fragment>
      <div>Counter: {this.state.count}</div>
      <button onClick={this.handlePlusButton}>+1</button>
      <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>

    )
  }
}

//function App() {
const App = () => {
  const greeting = "Hi";
  const profiles = [
    {name:"ichiro",age:10},
    {name:"jiro",age:20},
    {name:"saburo",age:30},
    {name:"shiro",age:40}
  ];
  /*
  <User name={"ichiro"} age={"10"} />
  <User name={"jiro"} age={"20"} />
  <User name={"saburo"} age={"30"} />
  */

  return (
          <React.Fragment>
          <h1 className="foo">{greeting}</h1>
          <label htmlFor="bar">bar</label>
          <input type="text" onClick={() => {console.log("clicked")}} />
          {
            profiles.map((profile, index) => {
              return <User name={profile.name} age={profile.age} key={index} />
            }

            ) 
          }
          <Counter></Counter>
          </React.Fragment>
  );
}

/*
const Cat = () => {
  return (
    <div>
      Meow
    </div>
  );
}
*/
const User = (props) => {
  return (
    <div>
      I am {props.name}, and  {props.age} year old.
    </div>
  );
}

/*
User.defaultProps = {
  age:99
}
*/

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}
export default App;
