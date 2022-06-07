import React, { useState } from 'react';
import assistant from '../../../asset/img/assistant.svg';
import table from '../../../asset/img/table.jpg';
import wall from '../../../asset/img/wall.jpg';

const HandsFree = () => {
    
    const tableShowing = (
        <div>
            <img className="mx-auto" src={table} alt="table" />
        </div>
    );
    const wallShowing = (
        <div>
            <img className="mx-auto" src={wall} alt="wall" />
        </div>
    );
    const [bgImage, handleImage] = useState(tableShowing);
    window.addEventListener("wheel", (e) => {
        if (e.deltaY > 0) {
            handleImage(wallShowing);
        } else {
            handleImage(tableShowing);
        }
    });
    return (
        <section className="pt-48">
            <div className="text-primary">
                <img className="mx-auto" src={assistant} alt="assistant" />
                <div className="text-center">
                    <h2 className="text-4xl my-6">
                        Hands-free help from Google.
                    </h2>
                    <p className="my-4">
                        Talk to Google to play music, check the weather, and
                        hear the news. Control your smart home and get
                        personalized timers, reminders, and more.
                    </p>
                </div>
            </div>
            <div className={`mx-auto mt-20 lg:mt-28 text-primary`}>
                {bgImage}
            </div>
        </section>
    );
};

export default HandsFree;