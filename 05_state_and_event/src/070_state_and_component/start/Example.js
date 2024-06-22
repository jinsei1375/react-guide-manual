import { useState } from "react";

const Example = () => {
  const [toggle, setToggle] = useState(true);
  const toggleComponent = () => {
    setToggle(prev => !prev);
  }
  return (
    <>
      <button onClick={toggleComponent}>toggle</button>
      {toggle ? <Count key="a" title="A"/> : <div><Count key="b" title="B" /></div>}
      <Count title="A" />
      {toggle && <Count title="B"/>}
    </>
  )
}

const Count = ({title}) => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>{title}: {count}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
