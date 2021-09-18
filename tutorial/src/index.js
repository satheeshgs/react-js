import React from "react";
import ReactDom from "react-dom";

//stateless functional component
//always return JSX

function BookList()
{
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>)
}

const Image = () => <img src="https://i.pinimg.com/474x/e7/2e/f3/e72ef3c21388b3c724845caf9cf19d40.jpg" alt="" />
const Title = () => <h1>Ikigai: The Japanese secret to a long and happy life</h1>
const Author = () => <h3>Hector Garcia</h3>

ReactDom.render(<BookList/>, document.getElementById("root")) 