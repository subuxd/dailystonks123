import React, { useState } from 'react'
import "./Gigs.scss"
import { gigs } from "../../data";
import GigCard from "../../components/gigCard/GigCard";


const Gigs = () => {
    const [sort, setSort] = useState("sales");
    const [open, setOpen] = useState(false);

    const reSort = (type) => {
        setSort(type);
        setOpen(false);
    };

    return (
        <div className='gigs'>
            <div className="container">
                <span className="breadcrumbs">DailyStonks </span>
                <h1>Analysts</h1>
                <p>Explore the array of analysts at your service</p>
                <div className="menu">
                    <div className="left">
                        <span>Budget</span>
                        <input type="text" placeholder='min' />
                        <input type="text" placeholder='max' />
                        <button>Apply</button>
                    </div>
                    <div className="right">
                        <span className='sortBy'>SortBy</span>
                        <span className='sortType'>{sort === "sales" ? "Best Performing" : "Best Rated"}</span>
                        <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
                        {open && (
                            <div className="rightMenu">
                                {sort === "sales" ? (
                                    <span onClick={() => reSort("createdAt")}>Best Rated</span>
                                ) : (
                                    <span onClick={() => reSort("sales")}>Best Performing</span>
                        )}
                        </div>
                        )}
                    </div>
                </div>
                <div className="cards">
                    {gigs.map(gig => (
                        <GigCard key={gig.id} item={gig} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gigs