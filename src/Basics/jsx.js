import React from 'react';

const Jsx = () => {
  const [counter, setCounter] = React.useState(0);
  const onClick = () => {
    let now = new Date().getMinutes();
    setCounter(now);
  };
  return (
    <div>
      <h3
        id="title"
        onMouseEnter={() => {
          console.log('Mouseenter');
        }}
      >
        TotalClicks:{counter}
      </h3>
      <button onClick={onClick} style={{ backgroundColor: 'tomato' }}>
        Clickme
      </button>
      ;
    </div>
  );
};
export default Jsx;
