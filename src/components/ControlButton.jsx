import React from 'react';
import PropTypes from 'prop-types';

function ControlButton(props) {
  return(
    <button>
      {props.buttonLabel}
      <style jsx>{`
        button {
          height: 95px;
          width: 95px;
          background-color: #fff;
          color: #333;
          border: 2px solid gray;
          border-radius: 50px;
          font-size: 1.5em;
          text-transform: uppercase;
          font-weight: 200;
          letter-spacing: 3px;
        }
      `}</style>
    </button>
  );
}

ControlButton.propTypes = {
  buttonLabel: PropTypes.string
}

export default ControlButton;
