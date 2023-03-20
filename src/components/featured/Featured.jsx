import React from 'react'
import "./Featured.scss"

const Featured = () => {
    return (
        <div className='featured'>
            <div className="container">
                <div className="left">
                    <h1>Find the perfect <i>Analysts</i> for your investments</h1>

                <div class="col-lg-6 download">

                    <a href="/comingsoon.html" target="_blank"><button type="button" class="btn btn-dark btn-lg download-button"><i class="fa-brands fa-apple"></i>
                        Download</button></a>
                    <a href="/comingsoon.html" target="_blank"><button type="button" class="btn btn-outline-light btn-lg download-button"><i
                            class="fa-brands fa-google-play"></i> Download</button></a>
                </div>
                    <div className="popular">
                        <span>Popular:</span>
                        <button>Intraday/BTST</button>
                        <button>Swing Trades</button>
                        <button>Long Term</button>
                        <button>Others</button>
                    </div>
                </div>
                <div className="right">
                    <img src="./img/111.png" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Featured