import React from 'react';
import PropTypes from 'prop-types';

function ControlButton(props) {

  return(
    <button onClick={()=> {props.onControlButtonClick(props.buttonLabel);}}>
      {props.buttonLabel}
      <style jsx>{`
        button {
          height: 95px;
          width: 95px;
          background-color: #eee;
          color: #333;
          border: 2px solid gray;
          border-radius: 50px;
          font-size: 1.5em;
          text-transform: uppercase;
          font-weight: 200;
          letter-spacing: 3px;
        }
        button:hover {
          background-color: #fff;
          box-shadow: 0 0 3px 3px rgba(255,255,255, 0.5);
          border: 2px solid gold;
        }
        button:focus {
          outline: 0;
        }
      `}</style>
    </button>
  );
}

ControlButton.propTypes = {
  buttonLabel: PropTypes.string,
  onControlButtonClick: PropTypes.func.isRequired
}

export default ControlButton;
