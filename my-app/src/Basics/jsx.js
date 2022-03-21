import React from 'react';

function Title() {
  const [counter, modifier] = React.useState(0);
  return (
    <h3
      id="title"
      onMouseEnter={() => {
        console.log('Mouseenter');
      }}
    >
      TotalClicks:{counter}
    </h3>
  );
}
function Btn() {
  return <button style={{ backgroundColor: 'tomato' }}>Clickme</button>;
}
const Jsx = () => {
  return (
    <div>
      <Title />
      <Btn />
    </div>
  );
};
export default Jsx;
