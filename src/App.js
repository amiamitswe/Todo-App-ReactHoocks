import React from 'react';

import ToDo from "./components/ToDo/ToDo";
import classes from './App.module.css';

const App = () => {
  return (
    <div className={[classes.App, 'container'].join(' ')}>
      <h2 className={classes.Title}>ToDo App</h2>
      <ToDo/>
    </div>
  );
}

export default App;
