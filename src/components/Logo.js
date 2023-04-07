import React from 'react';
import logo from '../logoStarwars.png';

function Logo() {
  return (
    <div className="flex justify-center h-auto">
      <img src={ logo } alt="starwars" className="w-96 mt-10" />
    </div>
  );
}

export default Logo;
