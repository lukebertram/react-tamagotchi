import React from 'react';
import pandabase from './../assets/images/panda_base.png';

function PetImage(props) {
  return (
    <div className="container"><style jsx>{`
        .container {
          background-color: lightgreen;
          height: 235px;
          width: 80%;
          padding: 1% 2%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        img {
          height: 60%;
        }`}</style>
        <img src={pandabase} />
    </div>
  );
}

export default PetImage;
