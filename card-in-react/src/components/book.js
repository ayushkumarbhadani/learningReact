import "./book.css";
function Book(props) {
  return (
    <div className="card">
      <img
        className="cover"
        src={props.img}
        height="150px"
        width="auto"
        alt=""
      />
      <h2 className="title">{props.title}</h2>
      <h4 className="author">-{props.author}</h4>
      <a className="link" href={props.link} target="_blank" rel="noreferrer">
        Click to Buy
      </a>
    </div>
  );
}

export default Book;
