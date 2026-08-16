import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const HeroSection = () => {
    return (
        <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">
                        Explore the World, One Country at a Time.
                    </h1>
                    <p className="paragraph">
                        Born to scale every peak, cross every ocean, and filter through every country—chasing the raw, wild details of a world that never ends.
                    </p>
                    <NavLink to={`/country/`}>
                        <button className="btn btn-darken btn-inline bg-white-box">Start Exploring <FaLongArrowAltRight /></button>
                    </NavLink>
                </div>
                <div className="hero-image">
                    <img className="banner-image" src="/images/world.jpg" alt="world" />
                </div>
            </div>
        </main>
    );
};