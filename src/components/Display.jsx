import React from 'react';
import PropTypes from 'prop-types';
import PetStats from './PetStats';
import PetImage from './PetImage';

function Display(props) {
  return(
    <div>
      <PetStats
        currentHealth={props.currentHealth}
        foodLevel={props.foodLevel}
        moodLevel={props.moodLevel}
        restLevel={props.restLevel} />
      <PetImage />
      <style jsx>{`
        div {
          background-color: lightblue;
          border: 2px solid peachpuff;
          min-height: 350px;
          min-width: 600px;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

Display.propTypes = {
  currentHealth: PropTypes.number.isRequired,
  foodLevel: PropTypes.number.isRequired,
  moodLevel: PropTypes.number.isRequired,
  restLevel: PropTypes.number.isRequired,
}

export default Display;
