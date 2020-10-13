import React from 'react';
import HeroSect from '../../HeroSect';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data';

const Home = () => {
    return (
        <>
          <HeroSect {...homeObjOne} /> 
          <HeroSect {...homeObjThree} />
          <HeroSect {...homeObjTwo} />
          <HeroSect {...homeObjFour} /> 
        </>
    );
};

export default Home;