import { useState } from "react";

const useCountUp = () => {
  const [count, setCount] = useState(0);

  const upCount = () => {
    setCount(prev => prev + 1);
  }

  return {
    count,
    upCount
  }
}

export default useCountUp