import React from 'react';

function State() {
  const [minutes, setMinutes] = React.useState('');
  const onChange = (event) => {
    setMinutes(event.target.value);
  };
  return (
    <div>
      <h1> Super Converter</h1>
      <label htmlFor="minutes">Minutes</label>
      <input
        id="minutes"
        placeholder="Minutes"
        type="number"
        value={minutes}
        onChange={onChange}
      />
      <h4>You want to convert{minutes}</h4>
      <label htmlFor="hours">Hours</label>
      <input
        id="hours"
        placeholder="Hours"
        type="
        number"
      />
    </div>
  );
}

export default State;
