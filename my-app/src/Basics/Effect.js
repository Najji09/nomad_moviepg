import React from 'react';
import { useEffect, useState } from 'react';

const Effect = () => {
  console.log('Run all the time');
  function onlyOnce() {
    console.log('Run only Once');
  }
  useEffect(() => {
    console.log('Call API...');
  }, []);
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
};

export default Effect;
