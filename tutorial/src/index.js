import React from "react";
import ReactDom from "react-dom";

//stateless functional component
//always return JSX

function Greeting()
{
  return (
    <div>
      <div>
        <Person/>
        <Message/>
        <h3>Card Title</h3>
      </div>
      <div>
        <a href='#'>Profile</a>
      </div>
    </div>
  );
}

const Person = () => <h2>FirstName LastName</h2>
const Message = () => {
  return <p>This is the profile picture</p>
}

/* const Greeting = () => {
  return React.createElement('div', {}, React.createElement('h1', {}, 'Hello world'));
} */

ReactDom.render(<Greeting/>, document.getElementById("root")) 