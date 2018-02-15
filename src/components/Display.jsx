import React from 'react';
import PetStats from './PetStats';
import PetImage from './PetImage';

function Display() {
  return(
    <div>
      <PetStats />
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

export default Display;
