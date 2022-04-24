import React, { useState } from "react";

function Task3Input() {
  const [nameChange, setNameChange] = useState("");

  const [namePush, setNamePush] = useState("");
  // console.log(multiple);
  let university = [
    {
      uni: [
        {
          univeristyName: [],
          studentName: [],
          programs: ["BCS", "BBA", "BSSE"],
        },
      ],
    },
  ];

  const clickHandler = () => {
    // console.log(e.target.value);
    university[0].uni.map((elem) => {
      elem.univeristyName.push(nameChange);
      setNamePush(`You University is: ${elem.univeristyName} `);
      return;
    });
    setNameChange("");
  };
  const changeHandler = (e) => {
    setNameChange(e.target.value);
  };
  return (
    <>
      <h1 className="text-center">Todo List </h1>
      <div className="container">
        <div className="row">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter University Name"
              value={nameChange}
              onChange={changeHandler}
            />

            <button
              className="btn btn-outline-secondary"
              onClick={clickHandler}
            >
              Button
            </button>
          </div>
          <h1>{namePush}</h1>
        </div>
      </div>
    </>
  );
}

export default Task3Input;
