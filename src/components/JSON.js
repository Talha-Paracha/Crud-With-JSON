import React, { createContext } from "react";
import CleanUpFunction from "./CleanUpFunction";
import ContextAPI from "./ContextAPI";
import InputField from "./InputField";
import Task2Project from "./Task2Project";
import Practice from "./Practice";
import Task3Input from "./Task3Input";
const myName = createContext();

const JSON = () => {
  return (
    <>
      <h1 className=" ms-5 ps-5 my-5">CRUD With JSON</h1>
      <InputField />
      {/* <CleanUpFunction /> */}
      {/* <myName.Provider value={"Context API"}>
        <ContextAPI />
      </myName.Provider>
      <Task2Project />
      <Practice />
      <Task3Input /> */}
    </>
  );
};
export default JSON;
export { myName };
