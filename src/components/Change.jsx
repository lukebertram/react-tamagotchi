import React from 'react';
import ControlButton from './ControlButton';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function Change(props) {
  const buttonTypes = ['feed', 'play', 'sleep'];

  return(
    <div className='container'>
      {buttonTypes.map((label) =>
        <ControlButton
          onControlButtonClick={props.onControlButtonClick}
          buttonLabel={label}
          key={v4()} />
      )}
      <style jsx>{`
        .container {
          min-height: 100px;
          width: 100%;
          background-color: peachpuff;
          display: flex;
          justify-content: space-around;
          padding: 0 50px;
        }
      `}</style>
    </div>
  );
}

Change.propTypes = {
  onControlButtonClick: PropTypes.func.isRequired
}

export default Change;
