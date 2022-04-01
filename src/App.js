import Jsx from './Basics/jsx';
import State from './Basics/State';
import Props from './Basics/Props';
import Effect from './Basics/Effect';
import styles from './App.module.css';
import EffectCleanup from './Basics/EffectCleanup';
import Todo from './practice/Todo';
import { useState } from 'react';
// import StateProps from './Basics/StateProps';

function App() {
  const [basics, showBasics] = useState(false);
  const onClick = () => {
    showBasics((prev) => !prev);
  };
  return (
    <div className="App">
      <button onClick={onClick}>
        {basics === true ? 'Hide Basics' : 'Show Basics'}
      </button>
      {basics === true ? (
        <div>
          <h1 className={styles.title}>Hi</h1>
          <Jsx />
          <State />
          <Props />
          <Effect />
          <EffectCleanup />
        </div>
      ) : null}
      <Todo />
    </div>
  );
}

export default App;
