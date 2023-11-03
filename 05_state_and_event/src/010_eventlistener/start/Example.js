const Example = () => {
  const clickHandler = () => {
    alert("クリックされました。");
  };
  const clickHandler2 = () => {
    alert("クリックされました2。");
  };
  return (
    <>
      <button onClick={clickHandler}>クリックしてね</button>
      <button onClick={clickHandler2}>クリックしてね</button>
    </>
  );
};

export default Example;
