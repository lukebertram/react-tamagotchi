import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Game from './Game';
import Header from './Header';

function App(){
  return (
    <div>
      <style jsx global>{`
        html, body, h1, h2, h3, h4, h5{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Helvetica, Arial, sans-serif;
        }
        div {
          box-sizing: border-box;
        }
        body {
          background-color: #444;
        }
      `}</style>
      <Header/>
      <div className="container">
        <Switch>
          <Route exact path='/' component={Game} />
          <Route component={Error404} />
        </Switch>
      </div>
      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: auto;
          background-color: #ddd;
          min-height: calc(100vh - 80px);

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

export default App;
