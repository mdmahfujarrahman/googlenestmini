import React from 'react';
import Ambition from '../Ambition/Ambition';
import Banner from '../Banner/Banner';
import ControlHome from '../ControlHome/ControlHome';
import Designed from '../Designed/Designed';
import HandsFree from '../HandsFree/HandsFree';
import Info from '../Info/Info';
import PlayMusic from '../PlayMusic/PlayMusic';
import Privacy from '../Privacy/Privacy';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <PlayMusic />
            <HandsFree />
            <ControlHome />
            <Privacy />
            <Designed />
            <Ambition/>
        </div>
    );
};

export default Home;