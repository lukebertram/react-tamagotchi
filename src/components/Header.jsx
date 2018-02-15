import React from 'react';

const header = {
  display: 'flex',
  justifyContent: 'center',
  fontFamily: 'Carrois Gothic SC, sans-serif',
  padding: '5%'
};

function Header(){
  return(
    <div style={header}>
      <h1>Gothic Tommy</h1>
    </div>
  );
}

export default Header;
