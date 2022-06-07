import React from 'react';
import Banner from '../Banner/Banner';
import ControlHome from '../ControlHome/ControlHome';
import HandsFree from '../HandsFree/HandsFree';
import Info from '../Info/Info';
import PlayMusic from '../PlayMusic/PlayMusic';
import Useness from '../Useness/Useness';

const Home = () => {
    return (
        <div >
            <Banner/>
            <Info/>
            <PlayMusic/>
            <HandsFree/>
            <ControlHome/>
            <Useness/>
        </div>
    );
};

export default Home;