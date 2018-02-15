import React from 'react';
import Display from './Display';
import Change from './Change';

class Game extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      masterGameStats: {
        name: "Gerty",
        foodLevel: 9,
        moodLevel: 7,
        restLevel: 6,
        currentHealth: 6,
        maxHealth: 10,
        healthMod: 0
      }
    };
    this.handleControlButtonClick = this.handleControlButtonClick.bind(this);
  }

  componentDidMount() {
  }

  //control button click should pass the name of the stat to be increased
  handleControlButtonClick(buttonLabel){
    alert(`You pressed the ${buttonLabel} button.`);
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
        <Change
          onControlButtonClick={this.handleControlButtonClick}/>
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
