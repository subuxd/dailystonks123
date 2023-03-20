import React from 'react'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/Slide/Slide'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import "./Home.scss"
import CatCard from "../../components/catCard/CatCard"
import ProjectCard from "../../components/projectCard/ProjectCard"
import { cards, projects } from "../../data"


const Home = () => {
    return (
        <div className='home'>
            <Featured />
            <TrustedBy />

            {/* 2nd page slider */}
            <Slide slidesToShow={5} >
                {cards.map((card) => (
                    <CatCard item={card}  key={card.id} />
                ))}
            </Slide>

            {/* 3rd page */}
            <div className="features">
                <div className="container">
                    <div className="item">
                        <h1>A whole array of analysts at your service.</h1>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            SEBI-registered Analysts
                        </div>
                        <p>Certified SEBI-registered Analysts with precise stock advice/research.</p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Quality Market Research
                        </div>
                        <p>Get high-quality latest market research from experts.</p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Transparent and Efficient
                        </div>
                        <p>Active market analysis to provide and promote tranparency, efficiency and investor protection in the Indian Stock Market.</p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            24/7 Support
                        </div>
                        <p>Connect directly to analysts with our in-app chat feature.</p>
                    </div>
                    <div className="item">
                        <video src="./img/video.mp4" controls></video>
                    </div>
                </div>
            </div>

            {/* 5th page */}
            <div className="features dark">
                <div className="container">
                    <div className="item">
                        <h1>Exclusive to Analysts</h1>
                        <h1>A platform that facilitates connection with investors</h1>
                        <p>Transform the platform to provide support for investors growth.</p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Connect to to investing individuals
                        </div>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Get matched with investors who share similar risk appetite
                        </div>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Elevate the investment and growth prospect of your subscribers through precise stock recommendations
                        </div>
                        
                        <a href="/comingsoon.html" target="_blank"><button type="button" class="btn btn-outline-light btn-lg download"><i
                            class="fa-brands"></i> Explore your portfolio</button></a>
                    </div>
                    <div className="item">
                        <img src="./img/replace.jpeg" alt="" />
                    </div>
                </div>
            </div>

            {/* 6th page slider */}
            <Slide slidesToShow={4} arrowsScroll={4}>
                {projects.map(card => (
                    <ProjectCard key={card.id} item={card} />
                ))}
            </Slide>




        </div>
    );
};

export default Home