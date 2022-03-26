import React from 'react';

function State() {
  const [amount, setAmount] = React.useState('');
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const reset = () => {
    setAmount('');
  };
  const [flipped, SetFlipped] = React.useState(false);
  const onFlip = () => {
    reset();
    SetFlipped((current) => !current);
  };

  return (
    <div>
      <h1> Super Converter</h1>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          id="minutes"
          placeholder="Minutes"
          type="number"
          value={flipped ? amount * 60 : amount}
          onChange={onChange}
          disabled={flipped}
        />
        <h4>You want to convert{amount}</h4>
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          value={flipped ? amount : Math.round(amount / 60)}
          id="hours"
          placeholder="Hours"
          type="
        number"
          disabled={!flipped}
          onChange={onChange}
        />
      </div>
      <button onClick={reset}>Reset button</button>
      <button onClick={onFlip}>Flip?</button>
    </div>
  );
}

export default State;
