import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

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
