import { useState, useEffect } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  // useEffect(() => { // at the page load
  //   setCounter(100);
  // }, []) // load only one

  useEffect(() => { // at the page load
    console.log('change counter to ' + counter);
  }, [counter]) // load when {counter} value change

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  )
}

export default Counter;
