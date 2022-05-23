import { useState, useEffect } from "react";
function ChangeTitle() {
  let [title, setTitle] = useState("Random Title");

  useEffect(() => {
    document.title = title;
  }, [title]);

  function changeTitle() {
    setTitle("Changing Title");
    console.log(title);
    if (title === "Changing Title") {
      setTitle("Random Title");
    } else {
      setTitle("Changing Title");
    }
    document.title = title;
  }

  return (
    <>
      <h1>{title}</h1>
      <button onClick={changeTitle}>Change Title</button>
    </>
  );
}
export default ChangeTitle;
