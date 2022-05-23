import { useState } from "react";

function ControlledInput() {
  const [person, setPerson] = useState({ name: "", email: "" });
  const [people, setPeople] = useState([]);
  const [showError, setShowError] = useState(false);

  function ShowError() {
    setTimeout(() => {
      setShowError(false);
    }, 2000);
    return (
      <>
        <div className="show-error">Error! Please Enter Proper Value!</div>
      </>
    );
  }

  const submitForm = (e) => {
    e.preventDefault();
    if (person.name && person.email) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ name: "", email: "" });
      //   console.log(people);
    } else {
      // console.error("Please Enter Proper Value!");
      setShowError(true);
    }
  };
  function handleChange(e) {
    const fieldName = e.target.name;
    const value = e.target.value;
    console.log(fieldName, value);
    setPerson({ ...person, [fieldName]: value });
  }

  return (
    <>
      {showError && <ShowError />}
      <form onSubmit={submitForm} className="form">
        <div className="form-field">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={person.name}
            onChange={handleChange}
            name="name"
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={person.email}
            onChange={handleChange}
            name="email"
          />
        </div>
        <button type="submit" className="primary-btn">
          Subscribe
        </button>
      </form>
    </>
  );
}
export default ControlledInput;
