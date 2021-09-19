import React from "react";
import ReactDom from "react-dom";

//CSS
import './index.css'

//stateless functional component
//always return JSX

function BookList()
{
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>)
}

const Image = () => <img src="https://i.pinimg.com/474x/e7/2e/f3/e72ef3c21388b3c724845caf9cf19d40.jpg" alt="" />
const Title = () => <h1>Ikigai: The Japanese secret to a long and happy life</h1>
const Author = () => <h3>Hector Garcia</h3>

ReactDom.render(<BookList/>, document.getElementById("root")) 