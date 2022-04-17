import React from 'react';
import Packages from '../Packages/Packages';
import Services from '../services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Packages></Packages>
        </div>
    );
};

export default Home;