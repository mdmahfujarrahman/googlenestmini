import React from 'react';
import IdeaSecond from "../../../asset/img/idea.png";
import Idea from "../../../asset/img/idea_1.png";
import IdeaThird from "../../../asset/img/idea_2.png";

const Useness = () => {
    return (
        <section className="container mx-auto my-20">
            <h2 className="brand-color text-5xl text-center my-10">
                Thoughtfully designed.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-(-25px)">
                <div>
                    <img
                        className="mx-auto rounded"
                        src={IdeaThird}
                        width="376px"
                        alt=""
                    />
                    <div className="text-center py-6 brand-color">
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
                    <div className="text-center py-6 brand-color">
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
                    <div className="text-center py-6 brand-color">
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

export default Useness;