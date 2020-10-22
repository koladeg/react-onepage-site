import React from 'react';
import HeroSect from '../../HeroSect';
import Pricing from '../../Pricing';
import { homeObjTwo } from './Data';

const Products = () => {
    return (
        <>
          <HeroSect {...homeObjTwo} /> 
        </>
    );
};

export default Products;