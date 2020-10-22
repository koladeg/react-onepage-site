import React from 'react';
import HeroSect from '../../HeroSect';
import { homeObjThree } from './Data';

const SignUp = () => {
    return (
        <>
          <HeroSect {...homeObjThree} /> 
        </>
    );
};

export default SignUp;