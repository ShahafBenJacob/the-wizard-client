import React from 'react';
import GameSettings from './routes/gameSettings/gameSettings';
import OnPlay from './routes/onPlay/onPlay';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GameHistory from './routes/gameHistory/gameHistory';




function App() {
  return (
    <Router>
    <Switch>
      <Route path="/onPlay/:id/:min/:max/:name" component={OnPlay}/>
      <Route path="/gameHistory" component={GameHistory}/>
      <Route path="/" component={GameSettings}/>
    </Switch>
  </Router>
  );
}

export default App;
