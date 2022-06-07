import React from 'react';
import privacyImage from '../../../asset/img/privecy.webp';

const Privacy = () => {
    return (
        <div className="container mx-auto pt-20">
            <div className="flex items-center flex-col">
                <h2 className="text-center text-4xl text-primary font-bold mb-12">
                    Being part of your home means <br /> respecting your
                    privacy.
                </h2>
                <button class="bg-transparent hover:bg-primary text-primary mb-12 font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded">
                    Learn More
                </button>
            </div>

            <img
                className="px-4 rounded-lg"
                src={privacyImage}
                alt="privacyImage"
            />
        </div>
    );
};

export default Privacy;