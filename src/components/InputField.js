import React, { useState } from "react";

const InputField = () => {
  const [nameChange, setNameChange] = useState("");
  const [ageChange, setAgeChange] = useState("");
  const [programChange, setProgramChange] = useState("");
  const [newValInput, setNewValInput] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  //OnClick handler
  const clickHandler = (e) => {
    e.preventDefault();
    if (!nameChange || !ageChange || !programChange) {
      alert("Please Enter Complete Data");
    } else if (nameChange && !toggleSubmit) {
      setNewValInput(
        newValInput.map((elem) => {
          if (elem.id === isEditItem) {
            return {
              ...elem,
              name: nameChange,
              age: ageChange,
              program: programChange,
            };
          }
          return elem;
        })
      );
      setToggleSubmit(true);
      setIsEditItem(null);
      setNameChange("");
      setAgeChange("");
      setProgramChange("");
    } else {
      const inputVal = {
        id: new Date().getTime().toString(),
        name: nameChange,
        age: ageChange,
        program: programChange,
      };
      setNewValInput([inputVal, ...newValInput]);
      setNameChange("");
      setAgeChange("");
      setProgramChange("");
    }
  };
  // Delete Element/
  const deleteHandler = (id) => {
    const deletedData = newValInput.filter((elem, ind) => {
      return ind !== id;
    });
    setNewValInput(deletedData);
  };

  // For Edit the item whenever you click
  // 1: get the id and name of the data which user clicked to edit
  // 2: set toggle mode to submit button into edit button
  //3: Now update the value of Your Input Field with the new state variable for reference
  //4: to pass the current element id to new state variable for reference

  const buttonUpdated = (id) => {
    // console.log(id);
    let editItem = newValInput.find((elem) => {
      // console.log(elem.name);
      return elem.id === id;
    });
    // console.log(editItem.name);
    setToggleSubmit(false);
    setNameChange(editItem.name);
    setAgeChange(editItem.age);
    setProgramChange(editItem.program);
    setIsEditItem(id);
  };
  return (
    <React.Fragment>
      <form className=" container ">
        <div className="col-md-3">
          First name
          <input
            className="form-control "
            value={nameChange}
            onChange={(e) => {
              setNameChange(e.target.value);
            }}
          />
        </div>
        <div className="col-md-3 ">
          Age
          <input
            className="form-control"
            value={ageChange}
            onChange={(e) => {
              setAgeChange(e.target.value);
            }}
          />
        </div>
        <div className="col-md-3 ">
          Programme
          <input
            className="form-control "
            value={programChange}
            onChange={(e) => {
              setProgramChange(e.target.value);
            }}
          />
        </div>
        {toggleSubmit ? (
          <button
            className="btn btn-lg btn-primary my-4"
            title="Add Item"
            onClick={clickHandler}
          >
            Add Item
          </button>
        ) : (
          <button
            className="btn btn-lg btn-primary my-4"
            title="Update Item"
            onClick={clickHandler}
          >
            Update Item
          </button>
        )}
      </form>

      {newValInput.map((elem, id) => {
        return (
          <div key={elem.id} className="container">
            <h2>{`Your Name is : ${elem.name} `}</h2>

            <h2>{`Your Age is : ${elem.age}`}</h2>

            <h2>{`Your Program is :${elem.program}`}</h2>

            <button
              className="btn btn-warning  ms-5 my-4 "
              onClick={() => deleteHandler(id)}
              title="Delete Item"
            >
              Delete
            </button>
            <button
              className="btn btn-danger ms-5 my-2"
              title="Update Item"
              onClick={() => buttonUpdated(elem.id)}
            >
              Update
            </button>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default InputField;
