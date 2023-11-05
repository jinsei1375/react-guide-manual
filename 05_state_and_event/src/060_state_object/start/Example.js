import { useState } from "react";

// プリミティブ型：1, "str", bool, null, undefined
// オブジェクト型：{}, []などのプリミティブ型
const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);

  const changeName = (e) => {

    console.log({ ...person });
    // setPerson({name: e.target.value, age: person.age})
    // 新しいオブジェクトとして生成する必要あり

    setPerson({...person, name: e.target.value, age: 20})
    // スプレッド演算子を使うことで、元のオブジェクトを展開して新しいオブジェクトを生成してくれる＋変更もできる
  }
  const changeAge = (e) => {
    setPerson({name: person.name, age: e.target.value})
  }

  const reset = () => {
    setPerson({name: "", age: ""})
  }

  return (
    <>
      <h3>Name:{person.name}</h3>
      <h3>Age:{person.age}</h3>

      <input type="text" value={person.name} onChange={changeName} />
      <input type="number" value={person.age} onChange={changeAge} />
      <div>
        <button onClick={reset}>リセット</button>
      </div>
    </>
  );
};

export default Example;
