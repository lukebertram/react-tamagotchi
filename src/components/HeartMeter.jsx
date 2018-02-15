import React from 'react';
import PropTypes from 'prop-types';
import fullHeartImage from '../assets/images/fullHeart.png';
import halfHeartImage from '../assets/images/halfHeart.png';
import emptyHeartImage from '../assets/images/emptyHeart.png';

function HeartMeter(props){

  return(
    <div className='hearts'>

      {getHeartArray(props.statValue).map((imageSrc, index) =>
        <img src={imageSrc} key={index}/>
      )}

      <style jsx>{`
        .hearts {
          height: 100%;
          width: 200px;
          background-color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;

          border: 1px solid #ccc;
        }

        p{
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
}

function getHeartArray(statValue){
  const heartArray = [];
  const fullHearts = Math.floor(statValue/2); // number of full hearts to display
  //push full hearts onto array
  for (let i = 0; i < fullHearts; i++) {
    heartArray.push(fullHeartImage);
  }

  //add halfHeart to array if remainder is present
  if (statValue % 2 !==0){
   heartArray.push(halfHeartImage);
  }

  //fill remaining spaces in 5 element array with empty hearts
  for (let i = heartArray.length; i < 5; i++) {
    heartArray.push(emptyHeartImage);
  }
  return heartArray;
}

HeartMeter.propTypes={
  statValue: PropTypes.number.isRequired
}

export default HeartMeter;
