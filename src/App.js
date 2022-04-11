// import Jsx from './Basics/jsx';
// import State from './Basics/State';
// import Props from './Basics/Props';
// import Effect from './Basics/Effect';
// import styles from './App.module.css';
// import EffectCleanup from './Basics/EffectCleanup';
// import Todo from './practice/Todo';
// import CoinTracker from './practice/Coin';
// import StateProps from './Basics/StateProps';
// import { useState } from 'react';
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  // const [basics, showBasics] = useState(false);
  // const onClick = () => {
  //   showBasics((prev) => !prev);
  // };
  return (
    <div className="App">
      {/* <button onClick={onClick}>
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
          <Todo />
          <CoinTracker />
          <Selection />
        </div>
      ) : null} */}
      <Router>
        <Switch>
          <Route path="/hello">
            <h1>Hello</h1>
          </Route>
          <Route path="/movie/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
