import React from 'react';
import { useState, useEffect } from 'react';

const Hello = () => {
  useEffect(() => {
    console.log('Created');
    return () => console.log('destroyed');
  }, []);
  const hifn = () => {
    console.log('Hi');
    return byfn;
  };
  const byfn = () => console.log('Bye');
  useEffect(hifn, []);
  return <h1>Hello!</h1>;
};

const EffectCleanup = () => {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>;
    </div>
  );
};

export default EffectCleanup;
