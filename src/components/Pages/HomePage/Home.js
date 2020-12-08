import React from 'react';
import HeroSect from '../../HeroSect';
import Pricing from '../../Pricing';
import { homeObjFive, homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data';

const Home = () => {
    return (
        <>
          <HeroSect {...homeObjOne} /> 
          <HeroSect {...homeObjThree} />
          <HeroSect {...homeObjTwo} />
          {/* <Pricing /> */}
          <HeroSect {...homeObjFour} /> 
          <HeroSect {...homeObjFive} /> 
        </>
    );
};

export default Home;