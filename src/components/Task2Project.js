import React, { useState } from "react";

const Task2Project = () => {
  const [uniName, setUniName] = useState("");
  const [program, setProgram] = useState("");
  const [students, setStudents] = useState("");
  const [programBTn1, setProgramBTn1] = useState("");
  const [programBTn2, setProgramBTn2] = useState("");
  const [programBTn3, setProgramBTn3] = useState("");
  const [proBtn, setProBtn] = useState(false);
  const [courseBtn, setCourseBtn] = useState(false);
  const [hideData, setHideData] = useState(false);

  const data = [
    {
      uni: {
        name: ["COMSATS", "NUST", "Virtual University"],

        COMSATS: {
          program: [`Programs : BSSE,   BSCS,    BSIT`],
          students: {
            BSSEStudents: [`BSSE Students : Haidar, Shafai, Nafai`],
            BSCSStudents: [`BSCS Students : Ghafoor, Saqib, Aqib`],
            BSITStudents: [`BSIT Students :  Zeeshan, Haider, Talha`],
          },
        },
        NUST: {
          program: [`programs : BSCE,  BSEE,  PHD`],
          nustStudents: {
            BSCEStudents: [`BSCE Students : Farman , Abdul, Waheed`],
            BSEEStudents: [`BSEE Students : Asad , Ghafoor, zeeshan`],
            phdStudents: [`PHD Students : Zeshan , Habib, waheed`],
          },
        },
        Fast: {
          program: [`Fast University : Engineering,  Arts, Animation`],
          fastStudents: {
            EngineeringStudents: [
              `Engineering Students : Zeeshan, Shafi, Talha`,
            ],
            ArtsStudents: [`Arts Students : Haidar , Fayyas, Ghayas`],
            Animation: [`Animation Students : Asad, Zeeshan, Taimoor`],
          },
        },
      },
    },
  ];

  let clickHandler = (e) => {
    setUniName(e.target.id);

    setProBtn(true);
    setHideData(false);
    setStudents("");
  };

  let showProgram = () => {
    setHideData(true);
    data.map((val) => {
      setCourseBtn(true);
      if (uniName == "COMSATS") {
        setProgram(val.uni.COMSATS.program);
        setProgramBTn1("BSSE");
        setProgramBTn2("BSCS");
        setProgramBTn3("BSIT");
      } else if (uniName == "NUST") {
        setProgram(val.uni.NUST.program);
        setProgramBTn1("BSCE");
        setProgramBTn2("BSEE");
        setProgramBTn3("PHD");
      } else if (uniName == "FAST") {
        setProgram(val.uni.Fast.program);
        setProgramBTn1("Engineering");
        setProgramBTn2("Arts");
        setProgramBTn3("Animation");
      } else {
      }
    });
  };

  let showStudents = (e) => {
    let btnVal = e.target.value;
    // console.log(btnVal);

    data.map((val) => {
      //   console.log(val);
      if (btnVal == "BSSE") {
        setStudents(val.uni.COMSATS.students.BSSEStudents);
      } else if (e.target.value == "BSCS") {
        setStudents(val.uni.COMSATS.students.BSCSStudents);
      } else if (e.target.value == "BSIT") {
        setStudents(val.uni.COMSATS.students.BSITStudents);
      } else if (e.target.value == "BSCE") {
        setStudents(val.uni.NUST.nustStudents.BSCEStudents);
      } else if (e.target.value == "BSEE") {
        setStudents(val.uni.NUST.nustStudents.BSEEStudents);
      } else if (e.target.value == "PHD") {
        setStudents(val.uni.NUST.nustStudents.phdStudents);
      } else if (e.target.value == "Engineering") {
        setStudents(val.uni.Fast.fastStudents.EngineeringStudents);
      } else if (e.target.value == "Arts") {
        setStudents(val.uni.Fast.fastStudents.ArtsStudents);
      } else if (e.target.value == "Animation") {
        setStudents(val.uni.Fast.fastStudents.Animation);
      } else {
      }
    });
  };
  return (
    <>
      <div>
        <h1 className="text-center">Choose University Names </h1>
        <button
          className="btn btn-info mt-5 mx-3 px-4"
          id="COMSATS"
          onClick={clickHandler}
        >
          COMSATS
        </button>
        <button
          className="btn btn-info mt-5 mx-3 px-4"
          id="NUST"
          onClick={clickHandler}
        >
          NUST
        </button>
        <button
          className="btn btn-info mt-5 mx-3 px-4"
          id="FAST"
          onClick={clickHandler}
        >
          FAST
        </button>
        <h1 className="mt-5 mx-4"> {uniName}</h1>
        {proBtn ? (
          <h3 className="mt-5 mx-4">
            Click the Program
            <br /> <br />
            <button
              className="btn btn-info  mx-3 px-4"
              id="program"
              onClick={showProgram}
            >
              program
            </button>
          </h3>
        ) : (
          ""
        )}
        {hideData ? (
          <div>
            {courseBtn ? (
              <div>
                <button
                  className="btn btn-info btn-lg mt-5 mx-3 px-4"
                  value={programBTn1}
                  onClick={showStudents}
                >
                  {programBTn1}
                </button>
                <button
                  className="btn btn-info btn-lg mt-5 mx-3 px-4"
                  value={programBTn2}
                  onClick={showStudents}
                >
                  {programBTn2}
                </button>
                <button
                  className="btn btn-info btn-lg mt-5 mx-3 px-4"
                  value={programBTn3}
                  onClick={showStudents}
                >
                  {programBTn3}
                </button>
                <h3 className="mt-5 mx-4">{students}</h3>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Task2Project;
