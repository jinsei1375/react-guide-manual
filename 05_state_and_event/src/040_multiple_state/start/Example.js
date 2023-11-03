import { useState } from "react";

const Example = () => {
  // useStateはComponent内のトップレベル以外では使えない！！（if文やfor文の中では使えない）
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(10);
  const [countC, setCountC] = useState(100);
  return (
    <>
      <p>ボタンAを{countA}回押しました！</p>
      <button
        onClick={() => {
          setCountA(countA + 1);
        }}
      >
        Aボタン
      </button>
      <p>ボタンBを{countB}回押しました！</p>
      <button
        onClick={() => {
          setCountB(countB + 1);
        }}
      >
        Bボタン
      </button>
      <p>ボタンCを{countC}回押しました！</p>
      <button
        onClick={() => {
          setCountC(countC + 1);
        }}
      >
        Cボタン
      </button>
    </>
  );
};

export default Example;
