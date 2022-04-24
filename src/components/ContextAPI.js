import React from "react";
import { myName } from "./JSON";
function ContextAPI() {
  return (
    <>
      <div>ContextAPI</div>
      <myName.Consumer>
        {(myName) => {
          return <h1>This is {myName}</h1>;
        }}
      </myName.Consumer>
    </>
  );
}

export default ContextAPI;
