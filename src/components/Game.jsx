import React from 'react';
import Display from './Display';
import Change from './Change';

class Game extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      masterGameStats: {
        name: "Gerty",
        foodLevel: 7,
        moodLevel: 5,
        restLevel: 2,
        currentHealth: 10,
        maxHealth: 10,
        healthMod: 0
      }
    };
    // this.handleNewData = this.handleNewData.bind(this);
  }


  // handleNewData(newData){
  //   let masterGameStats = this.state.masterGameStats.slice();
  //   newMasterGameArray.push(newData);
  //   this.setState({masterGameStats: newMasterGameArray});
  // }

  render(){
    return(
      <div className="container">
        <h1>{this.state.masterGameStats.name}</h1>
        <Display
          currentHealth={this.state.masterGameStats.currentHealth}
          foodLevel={this.state.masterGameStats.foodLevel}
          moodLevel={this.state.masterGameStats.moodLevel}
          restLevel={this.state.masterGameStats.restLevel} />
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
