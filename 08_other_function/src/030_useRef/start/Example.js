import { useState, useRef } from "react";

const Case1 = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef();

  // console.log(inputRef);

  return (
    <div>
      <h3>ユースケース1</h3>
      <input type="text" ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => inputRef.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </div>
  );
};

const Case2 = () => {
  const [playing, setPlaying] = useState(false);
  const vidioRef = useRef();
  return (
    <div>
      <video style={{ maxWidth: "100%" }} ref={vidioRef}>
        <source src="./sample.mp4" type="" ></source>
      </video>
      <button onClick={() => {
        if(playing) {
          vidioRef.current.pause();
        } else {
          vidioRef.current.play();
        }
        console.log(vidioRef);
        setPlaying(prev => !prev);
      }}>
        {
          playing ? 'Stop' : 'Play'
        }
      </button>
    </div>
  )
}

const Example = () => {
  return (
    <>
      <Case1 />
      <Case2 />
    </>
  );
};

export default Example;
