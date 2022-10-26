import React from "react";
import freeCodeCampLogo from '../img/freecodecamp-logo.png';

function LogoFreeCodeCamp (){
    return(
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de freecodeCamp' />
    );
}

export default LogoFreeCodeCamp;