import React, { useState, useEffect } from "react";

const CleanUpFunction = () => {
  const [valueChange, setValueChange] = useState(window.screen.width);

  const numberChange = () => {
    // console.log(window.innerWidth);
    setValueChange(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", numberChange);
    return () => {
      //Clean Up Code
      window.removeEventListener("resize", numberChange);
    };
  }, []);
  return (
    <div className="text-center">
      <h1>The Size of the Screen is: </h1>
      <h1>{valueChange}</h1>
    </div>
  );
};

export default CleanUpFunction;
