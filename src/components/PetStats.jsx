import React from 'react';
import PropTypes from 'prop-types';
import HeartMeter from './HeartMeter';

function PetStats(props) {

  return (
    <div className='container'>
      <div className='pet-stat'>
        <h4>Health</h4>
        <HeartMeter
          statValue={props.currentHealth}/>
      </div>

      <div className='pet-stat'>
        <h4>Hunger</h4>
        <HeartMeter
          statValue={props.foodLevel} />
      </div>

      <div className='pet-stat'>
        <h4>Mood</h4>
        <HeartMeter
          statValue={props.moodLevel}/>
      </div>

      <div className='pet-stat'>
        <h4>Tired</h4>
        <HeartMeter
          statValue={props.restLevel}/>
      </div>

      <style jsx>{`
        .container {
          height: 115px;
          width: 65%;
          background-color: honeydew;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
        }

        .pet-stat {
          height: 50px;
          width: 100%;
          background-color: pink;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        .hearts {
          height: 100%;
          width: 200px;
          background-color: #fff;
        }
      `}</style>
    </div>
  );
}

PetStats.propTypes = {
  currentHealth: PropTypes.number.isRequired,
  foodLevel: PropTypes.number.isRequired,
  moodLevel: PropTypes.number.isRequired,
  restLevel: PropTypes.number.isRequired,
};

export default PetStats;
