import React from 'react';
import { Link } from 'react-router-dom';

const ControlHome = () => {
    return (
        <section className="bg-worktable-bg bg-center h-screen mt-8">
            <div className="container mx-auto bg-tv-bg h-screen bg-no-repeat">
                <div className="flex flex-col items-center justify-center bg-tvscreen-bg h-screen  bg-no-repeat">
                    <div className="text-center text-accent px-4">
                        <h1 className="text-4xl font-bold mb-8">
                            Control your home with just your voice.
                        </h1>
                        <p className="mb-8">
                            Dim the lights, turn on the TV, or turn up the
                            heat--just ask Google.4 Works with thousands of
                            compatible smart devices.
                        </p>
                    </div>
                    <div className="flex justify-center my-6 ">
                        <Link
                            to={"/shop"}
                            className="text-blue-700 hover:text-white border border-blue-800 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 font-medium rounded px-10 py-4 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                        >
                            Buy Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ControlHome;