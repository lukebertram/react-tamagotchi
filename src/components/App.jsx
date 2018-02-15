import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Game from './Game';
import Header from './Header';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Game} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
