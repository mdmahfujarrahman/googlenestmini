import React from 'react';
import IdeaSecond from "../../../asset/img/idea.png";
import Idea from "../../../asset/img/idea_1.png";
import IdeaThird from "../../../asset/img/idea_2.png";
import leef from "../../../asset/img/leef.svg";

const Designed = () => {
    return (
        <section className="container mx-auto my-20">
            <div className="text-center text-primary mb-12">
                <img className="mx-auto py-10" src={leef} alt="leef" />
                <h2 className="text-3xl lg:text-5xl font-bold">
                    Thoughtfully designed to fit any room.
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-primary">
                <div>
                    <img
                        className="mx-auto rounded"
                        src={IdeaThird}
                        width="376px"
                        alt=""
                    />
                    <div className="text-center py-6">
                        <h4 className="text-xl font-bold">
                            Hang it on the wall.
                        </h4>
                        <p className="my-2">
                            The Intergrated wall mount makes it easy to <br />{" "}
                            put in any room.
                        </p>
                    </div>
                </div>
                <div>
                    <img
                        className="mx-auto rounded"
                        src={IdeaSecond}
                        width="376px"
                        alt=""
                    />
                    <div className="text-center py-6">
                        <h4 className="text-2xl font-bold">
                            Easy volume controls.
                        </h4>
                        <p className="my-2">
                            LEDs loght up to show your controls <br />
                            when you approach it.
                        </p>
                    </div>
                </div>
                <div>
                    <img
                        className="mx-auto rounded"
                        src={Idea}
                        width="376px"
                        alt=""
                    />
                    <div className="text-center py-6">
                        <h4 className="text-2xl font-bold">
                            Sustainable materials.
                        </h4>
                        <p className="my-2">
                            Favric covering made from recycled
                            <br /> plastic bollles.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Designed;