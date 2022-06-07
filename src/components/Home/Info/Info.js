import React from 'react';
import assistant from '../../../asset/img/assistant.svg';
import expand from '../../../asset/img/expand.png';
import leef from "../../../asset/img/leef.svg";
import sound from '../../../asset/img/mic.svg';


const Info = () => {
    return (
        <section className="container mx-auto text-center my-60">
            <div className="text-primary font-bold my-8 text-4xl lg:text-6xl">
                <h2 className="">Meet the Nest Mini.</h2>
                <h5 className="">
                    The little speaker that's a huge help around the <br />{" "}
                    house.
                </h5>
            </div>
            <div className="flex flex-col lg:flex-row divide-y-2 lg:divide-y-0 text-primary justify-center space-x-0 lg:space-x-20">
                <div className="flex flex-col justify-between">
                    <div>
                        <img className="mx-auto my-4" src={sound} alt="sound" />
                        <h6 className="text-2xl  my-4 font-bold">
                            Play your go-to music,
                            <br /> podcasts and more.
                        </h6>
                        <p>
                            Stream your favorite audio <br />
                            content on the improved <br />
                            speaker and create a home
                            <br /> audio system with other Nest <br />
                            speakers.
                        </p>
                    </div>
                    <img className="mx-auto my-8" src={expand} alt="expand" />
                </div>

                <div className="flex flex-col justify-between">
                    <div>
                        <img
                            className="mx-auto my-4"
                            src={assistant}
                            alt="assistant"
                        />
                        <h6 className="text-2xl my-4 font-bold">
                            Hands-free help from <br />
                            Google.
                        </h6>
                        <p>
                            Ask Google to get answers,
                            <br /> news, turn on lights and more, all
                            <br /> with your voice.
                        </p>
                    </div>
                    <img className="mx-auto my-8" src={expand} alt="expand" />
                </div>

                <div className="flex flex-col justify-between">
                    <div>
                        <img className="mx-auto my-4" src={leef} alt="leef" />
                        <h6 className="text-2xl  my-4 font-bold">
                            Thoughtfully designed <br />
                            to fit any room.
                        </h6>

                        <p>
                            An eco-friendly design made
                            <br /> with recycled materials fits
                            <br /> seamlessly into any room you
                            <br /> choose.
                        </p>
                    </div>
                    <img className="mx-auto my-8" src={expand} alt="expand" />
                </div>
            </div>
        </section>
    );
};

export default Info;