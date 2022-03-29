import Jsx from './Basics/jsx';
import State from './Basics/State';
import Props from './Basics/Props';
import Effect from './Basics/Effect';
import styles from './App.module.css';
// import StateProps from './Basics/StateProps';

function App() {
  return (
    <div className="App">
      <h1 className={styles.title}>Hi</h1>
      <Jsx />
      <State />
      <Props />
      <Effect />
      {/* <StateProps /> */}
    </div>
  );
}

export default App;
