import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundVideo from "../../../asset/video/background.mp4";

const Banner = () => {
    return (
        <section className="banner-container items-center mt-36">
            <div className="text-primary">
                <h1 className="text-center text-6xl font-bold brand-color">
                    Nest Mini.
                </h1>
                <h1 className="text-center text-6xl font-bold brand-color mt-4">
                    Still mini. Even more mighty.
                </h1>
                <div className="flex justify-center my-6 ">
                    <Link
                        to={"/shop"}
                        className="text-blue-700 hover:text-white border border-blue-800 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 font-medium rounded px-10 py-4 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                    >
                        Buy Now
                    </Link>
                </div>
            </div>
            <video className="mx-auto" autoPlay loop muted>
                <source src={BackgroundVideo} type="video/mp4" />
            </video>
        </section>
    );
};

export default Banner;