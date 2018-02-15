import React from 'react';
import Display from './Display';
import Change from './Change';

class Game extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      masterGameArray: {
        name: "Gerty",
        foodLevel: 10,
        moodLevel: 10,
        restLevel: 10,
        currentHealth: 10,
        maxHealth: 10,
        healthMod: 0
      }
    };
    // this.handleNewData = this.handleNewData.bind(this);
  }

  //game array [foodLevel/10, moodLevel/10, restLevel/10, hungerMod/0]
  // game --> display --> PetStatus refers to gameArray levels
  // game --> change --> buttons manipulate array
  // game has conditional rendering: if foodLevel = 0, life = dead, if foodLevel > 0, life = alive

  // handleNewData(newData){
  //   let masterGameArray = this.state.masterGameArray.slice();
  //   newMasterGameArray.push(newData);
  //   this.setState({masterGameArray: newMasterGameArray});
  // }

  render(){
    return(
      <div className="container">
        <h1>{this.state.masterGameArray.name}</h1>
        <Display />
        <Change />
        <style jsx>{`
          .container {
            margin: 0 5vw;
            background-color: #bbb;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </div>
    );
  }
}

export default Game;
