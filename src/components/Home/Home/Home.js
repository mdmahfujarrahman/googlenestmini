import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import PlayMusic from '../PlayMusic/PlayMusic';
import Useness from '../Useness/Useness';

const Home = () => {
    return (
        <div >
            <Banner/>
            <Info/>
            <PlayMusic/>
            <Useness/>
        </div>
    );
};

export default Home;