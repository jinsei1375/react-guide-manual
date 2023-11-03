import { useState } from "react";
const Example = () => {
  // let displayVal;
  let [val, setVal] = useState("hello");
  // console.log(displayVal);
  console.log("再レンダリング");
  return (
    <>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => {
          // const setFn = valArry[1];
          console.log(e.target.value);
          setVal(e.target.value);
          // displayVal = e.target.value;
        }}
      />
      = {val}
    </>
  );
};

export default Example;
