import React from 'react';

function Time() {
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
      <h3> Minutes and Hours</h3>
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
          value={flipped ? amount : Math.round((amount / 60) * 10) / 10}
          id="hours"
          placeholder="Hours"
          type="
        number"
          disabled={!flipped}
          onChange={onChange}
        />
      </div>
      <button onClick={reset}>Reset button</button>
      <button onClick={onFlip}>
        {flipped ? 'Type Minutes' : 'Type Hours'}
      </button>
    </div>
  );
}
function Meter() {
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
      <h3>Miles and Killometer</h3>
      <div>
        <label htmlFor="miles">Miles</label>
        <input
          id="miles"
          placeholder="Miles"
          type="number"
          value={flipped ? Math.round((amount / 1.6) * 10) / 10 : amount}
          onChange={onChange}
          disabled={flipped}
        />
        <h4>
          You want to convert{amount} {flipped ? 'Killometers' : 'Miles'}
        </h4>
      </div>
      <div>
        <label htmlFor="km">Killometers</label>
        <input
          value={flipped ? amount : Math.round(amount * 1.6 * 10) / 10}
          id="km"
          placeholder="Killometers"
          type="
        number"
          disabled={!flipped}
          onChange={onChange}
        />
      </div>
      <button onClick={reset}>Reset button</button>
      <button onClick={onFlip}>
        {flipped ? 'Type Miles' : 'Type Killometers'}
      </button>
    </div>
  );
}

const State = () => {
  const [index, setIndex] = React.useState('0');
  const onSelect = (event) => {
    setIndex(event.target.value);
    converterSwitch(index);
  };
  const converterSwitch = (a) => {
    console.log(a);
    switch (a) {
      case '0':
        return <h1>Select the unit</h1>;
      case '1':
        return <Time />;

      case '2':
        return <Meter />;
    }
  };
  return (
    <div>
      <h1> Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="0">Select your unit</option>
        <option value="1">Minutes and Hours</option>
        <option value="2">Miles and Killometers</option>
      </select>
      {converterSwitch(index)}
    </div>
  );
};

export default State;
