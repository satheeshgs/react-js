import React from "react";
import ReactDom from "react-dom";

//stateless functional component
//always return JSX

function Greeting()
{
  return (<div>
      <div>
        <h1>Hello world</h1>
      </div>
      <div>
        <a href='#'>Link</a>
      </div>
    </div>)
}


/* const Greeting = () => {
  return React.createElement('div', {}, React.createElement('h1', {}, 'Hello world'));
} */

ReactDom.render(<Greeting/>, document.getElementById("root")) 