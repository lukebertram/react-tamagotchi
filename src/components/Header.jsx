import React from 'react';

const header = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Carrois Gothic SC, sans-serif',
  height: 80,
  backgroundColor: '#aaa'
};

function Header(){
  return(
    <div style={header}>
      <h1>Virtual Responsibility</h1>
    </div>
  );
}

export default Header;
