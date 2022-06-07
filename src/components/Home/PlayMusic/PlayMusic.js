import React, { useState } from 'react';
import img0 from '../../../asset/img/0.jpg';
import img2 from '../../../asset/img/2.jpg';
import sound from '../../../asset/img/mic.svg';


const PlayMusic = () => {
    const slide1 = (
        <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="my-10">
                <h2 className="text-2xl">
                    Made with the environment
                    <br /> in mind.
                </h2>
                <p className="my-2">
                    Durable fabric top made from
                    <br /> recycled plastic bottles.
                </p>
            </div>
            <img className="mx-auto" src={img0} alt="" />
        </div>
    );
    const slide2 = (
        <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="my-10">
                <h2 className="text-2xl">Improved voice recognition.</h2>
                <p className="my-2">Ask for help from across the room.</p>
            </div>
            <img className="mx-auto" src={img2} alt="" />
        </div>
    );

    const [bgImage, handleImage] = useState(slide1);
    window.addEventListener("wheel", (e) => {
        if (e.deltaY > 0) {
            handleImage(slide2);
        } else {
            handleImage(slide1);
        }
        
    });

    return (
        <section className="bg-[#F3F3F3] pt-48">
            <div className="text-center text-primary">
                <img className="mx-auto py-10" src={sound} alt="sound" />
                <h2 className="text-5xl lg:text-8xl font-bold">
                    Play your go-to music, podcasts <br /> and more.
                </h2>
            </div>
            <div className="container mx-auto mt-20 lg:mt-28 text-primary">
                {bgImage}
                
            </div>
        </section>
    );
};

export default PlayMusic;