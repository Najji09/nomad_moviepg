import React from 'react';
import units from './units.json';

function Converter(props) {
  const [amount, setAmount] = React.useState('');
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const reset = () => {
    setAmount(0);
  };
  const [flipped, SetFlipped] = React.useState(false);
  const onFlip = () => {
    reset();
    SetFlipped((current) => !current);
  };

  return (
    <div>
      <h3>
        {props.unit1} and {props.unit2}
      </h3>
      <div>
        <label htmlFor={props.unit1}>{props.unit1}</label>
        <input
          id={props.unit1}
          placeholder={props.unit1}
          type="number"
          value={flipped ? amount * props.unitConvert : amount}
          onChange={onChange}
          disabled={flipped}
        />
      </div>
      <br />
      <div>
        <label htmlFor={props.unit2}>{props.unit2}</label>
        <input
          value={
            flipped
              ? amount
              : Math.round((amount / props.unitConvert) * 10) / 10
          }
          id={props.unit2}
          placeholder={props.unit2}
          type="
        number"
          disabled={!flipped}
          onChange={onChange}
        />
      </div>
      <button onClick={reset}>Reset button</button>
      <button onClick={onFlip}>
        Type
        {flipped ? props.unit1 : props.unit2}
      </button>
    </div>
  );
}
const Option = (props) => {
  return (
    <option value={props.i}>
      {props.unit1} and {props.unit2}
    </option>
  );
};
const Options = () => {
  return units.map((unit, index) => {
    if (index === 0) {
      return (
        <option key="0" value="0">
          Select a unit
        </option>
      );
    }
    return (
      <Option
        i={index.toString()}
        unit1={unit.unit1}
        unit2={unit.unit2}
        key={index.toString()}
      />
    );
  });
};

const StateProps = () => {
  const [index, setIndex] = React.useState(0);
  const onSelect = (event) => {
    setIndex(Number(event.target.value));
  };
  const converterSwitch = (a) => {
    console.log(a);
    if (a == 0) {
      return <h1>Select a unit</h1>;
    } else {
      return (
        <Converter
          unit1={units[a].unit1}
          unit2={units[a].unit2}
          unitConvert={units[a].unitConvert}
        />
      );
    }
  };
  return (
    <div>
      <h1> Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <Options />
      </select>
      <hr />
      {converterSwitch(index)}
    </div>
  );
};

export default StateProps;
