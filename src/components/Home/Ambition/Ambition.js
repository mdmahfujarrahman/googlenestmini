import React from 'react';
import ambition from '../../../asset/img/ambition.webp';

const Ambition = () => {
    return (
        <div className="container mx-auto my-20">
            <div className="flex items-center flex-col text-primary">
                <p className="text-xl">Our ambition</p>
                <div className="text-5xl my-8 text-center">
                    <p>Making sustainable and</p>
                    <p>accessible products.</p>
                </div>
                <button class="bg-transparent hover:bg-primary text-primary mb-12 font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded">
                    Learn More
                </button>
            </div>
            <img src={ambition} alt="ambition" />
        </div>
    );
};

export default Ambition;