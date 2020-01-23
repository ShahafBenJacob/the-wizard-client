import React from 'react';
import GameSettings from './routes/gameSettings/gameSettings';
import OnPlay from './routes/onPlay/onPlay';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <Router>
    <Switch>
      <Route path="/onPlay" component={OnPlay}/>
      <Route path="/" component={GameSettings}/>
    </Switch>
  </Router>
  );
}

export default App;
