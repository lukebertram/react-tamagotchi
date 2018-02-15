import React from 'react';
import Display from './Display';
import Change from './Change';

class Game extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      masterGameArray: []
    };
    this.handleNewData = this.handleNewData.bind(this);
  }

  //game array [foodLevel/10, moodLevel/10, restLevel/10, hungerMod/0]
  // game --> display --> PetStatus refers to gameArray levels
  // game --> change --> buttons manipulate array
  // game has conditional rendering: if foodLevel = 0, life = dead, if foodLevel > 0, life = alive

  handleNewData(newData){
    let masterGameArray = this.state.masterGameArray.slice();
    newMasterGameArray.push(newData);
    this.setState({masterGameArray: newMasterGameArray});
  }

  render(){
    return(
      <div className="container">
        <style jsx global>{`
            .container {
              margin: 0 5vw;
            }`}</style>
        <h1>Game Component</h1>
        <Display />
        <Change />
      </div>
    );
  }
}

export default Game;
