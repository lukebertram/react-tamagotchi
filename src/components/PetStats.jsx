import React from 'react';

function PetStats(props) {
  return (
    <div className='container'>
      <div className='pet-stat'>
        <h4>Health</h4>
        <div className='hearts'>

        </div>
      </div>

      <div className='pet-stat'>
        <h4>Hunger</h4>
        <div className='hearts'>

        </div>
      </div>

      <div className='pet-stat'>
        <h4>Mood</h4>
        <div className='hearts'>

        </div>
      </div>

      <div className='pet-stat'>
        <h4>Tired</h4>
        <div className='hearts'>
          hearts
        </div>
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
      `}</style>
    </div>
  );
}

export default PetStats;
