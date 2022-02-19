import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import data from "./data";
import Book from "./components/book";
import Footer from "./components/footer";

function BookList() {
  let newData = data.map((item, index) => {
    return (
      <Book
        key={index}
        img={item.img}
        title={item.title}
        author={item.author}
        link={item.link}
      />
    );
  });
  return newData;
}

function Cards(props) {
  return (
    <>
      <h1 className="heading">
        5 Books that Every Person Must Read for better Finance and Wealth
        Management
      </h1>
      <main className="book-wrapper">
        <BookList />
      </main>
      <Footer />
    </>
  );
}

ReactDom.render(<Cards />, document.getElementById("root"));
