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
    let newStat = 2;
    let statName = '';
    switch (buttonLabel) {
      case 'feed':
        statName = 'foodLevel';
        //if 2 can be added to stat without going over 10...
        if (this.state.masterGameStats.foodlevel < 9){
          newStat += this.state.masterGameStats.foodLevel;
        //else set stat to 10 to prevent going over max value
        } else {
          newStat = 10;
        }
        break;
      case 'play':
        statName = 'moodLevel';
        if (this.state.masterGameStats.moodLevel < 9){
          newStat += this.state.masterGameStats.moodLevel;
        } else {
          newStat = 10;
        }
        break;
      case 'sleep':
        statName = 'restLevel';
        if (this.state.masterGameStats.restLevel < 9){
          newStat += this.state.masterGameStats.restLevel;

        } else {
          newStat = 10;
        }
        break;
      default:
        newStat = 0;
        break;
    }
    const newMasterGameStats = Object.assign(
      {},
      this.state.masterGameStats,
      {[statName]: newStat});
      console.table(newMasterGameStats);

    this.setState({masterGameStats: newMasterGameStats})
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
