import React from 'react';
import HeroSect from '../../HeroSect';
import Pricing from '../../Pricing';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data';

const Services = () => {
    return (
        <>
          <Pricing />
          <HeroSect {...homeObjOne} /> 
        </>
    );
};

export default Services;