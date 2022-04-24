import React, { useState } from "react";

function Task3Input() {
  const [myName, setMyName] = useState("");
  const [btnState, setBtnState] = useState("");
  let university = [
    {
      uni: [
        {
          univeristyName: ["GIKI"],
          programs: ["BCS", "BBA", "BSSE"],
        },
      ],
    },
  ];
  const changeHandler = (e) => {
    setMyName(e.target.value);
  };
  const clickHandler = () => {
    setBtnState(myName);
  };
  return (
    <>
      <h1>Hello {btnState}</h1>

      <div className="container">
        <div className="row">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Recipient's username"
              value={myName}
              onChange={changeHandler}
            />
            <button
              className="btn btn-outline-secondary"
              onClick={clickHandler}
            >
              Button
            </button>
          </div>
        </div>
      </div>
      {university.map((elem) => {
        //   return elem;
        console.log(elem.uni[0].univeristyName);
      })}
    </>
  );
}

export default Task3Input;
