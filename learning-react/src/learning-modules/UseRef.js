import { useRef, useEffect } from "react";

function UseRef() {
  const refContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer);
  };

  useEffect(() => {
    refContainer.current.focus();
  });
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-field">
          <input type="text" ref={refContainer} />
        </div>
        <div className="form-field">
          <button type="submit" className="primary-btn">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
export default UseRef;
