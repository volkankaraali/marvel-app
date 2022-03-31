import React from 'react';

import marvelLogo from '../../images/marvel-logo.png';

function Header() {
  return (
    <header>
      <img src={marvelLogo} alt="marvel-logo" />
    </header>
  );
}

export default Header;