import React from "react";
import Data from "./data";
import "./App.css";
import data from "./data";
function App() {
  // const [title, setTitle] = React.useState(
  //   "Click the button to change Heading"
  // );
  // function changeHeading() {
  //   console.log("Changing..");
  //   if (title === "Click the button to change Heading")
  //     setTitle("Title Changed!");
  //   else setTitle("Click the button to change Heading");
  // }
  // return (
  //   <>
  //     <h1>{title}</h1>
  //     <button onClick={changeHeading}>Change Heading</button>
  //   </>
  // );
  const [data, setData] = React.useState(Data);
  function removeItem(id) {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  }
  function addData() {
    return data.map((item) => {
      return (
        <>
          <div className="item" key={item.id}>
            <h3>{item.name}</h3>
            <button className="prm-btn" onClick={() => removeItem(item.id)}>
              Remove{" "}
            </button>
          </div>
        </>
      );
    });
  }
  function removeAllItem() {
    setData([]);
  }
  function loadAllItem() {
    setData(Data);
  }
  function loadRandom() {
    let random = Math.floor(Math.random() * Data.length);
    console.log(random);
    console.log(Data[random]);
    setData([Data[random]]);
  }
  function removeRandom() {
    let random = Math.floor(Math.random() * data.length);
    console.log(random);
    console.log(data);
    const newData = data.filter((item, index) => index !== random);
    setData(newData);
  }
  return (
    <>
      <div className="container-warpper" key="rand">
        {addData()}
        <div className="action-button-container">
          <button className="prm-btn" onClick={removeAllItem}>
            Remove All
          </button>
          <button className="prm-btn" onClick={loadAllItem}>
            Load All Data
          </button>
          <button className="prm-btn" onClick={loadRandom}>
            Load one Random
          </button>
          <button className="prm-btn" onClick={removeRandom}>
            Remove one Random
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
