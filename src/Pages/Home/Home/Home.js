import React from 'react';
import AppSection from '../AppSection/AppSection';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Inventories from '../Inventories/Inventories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <AppSection></AppSection>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;