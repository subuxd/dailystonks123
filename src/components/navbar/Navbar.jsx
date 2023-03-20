import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Navbar.scss"

const Navbar = () => {

    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const {pathname} = useLocation()

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive);
        return() =>{
            window.removeEventListener("scroll", isActive);
        };
    }, []);

    const currentUser = {
        id: 1,
        username: "Subham Singh",
        isSeller:true
    }

    return (
        <div className={active || pathname!=="/" ? "navbar active" : "navbar"}>
            <div className='container'>
                <div className='logo'>
                    <Link to="/" className='link'>
                    <span className='text'>dailystonks</span>
                    </Link>
                    <span className='dot'>.</span>
                </div>
                <div className='links'>
                    <span>About us</span>
                    <span>Analysts</span>
                    <span>English</span>
                    <span>Sign in</span>
                    {!currentUser?.isSeller && <span>Join as analyst</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser && (
                        <div className="user" onClick={()=>setOpen(!open)}>
                            <img src="/images/pp.png" alt="" />
                            <span>{currentUser?.username}</span>
                            {open && <div className="options">
                                {currentUser?.isSeller && (
                                    <>
                                        <Link to="/mygigs" className='link'>Gigs</Link>
                                        <Link to="/add" className='link'>Add New Gig</Link>
                                    </>
                                )}
                                <Link to="/orders" className='link'>Orders</Link>
                                <Link to="/messages" className='link'>Messages</Link>
                                <Link to="/logout" className='link'>Logout</Link>
                            </div>}
                        </div>
                    )}
                </div>
            </div>
            {(active || pathname!=="/") && (
                <>
                    <hr />
                    <div className="menu">
                        <Link to="/" className='link menuLink' >
                            Markets
                        </Link>
                        <Link to="/" className='link menuLink' >
                            Ideas
                        </Link>
                        <Link to="/" className='link menuLink' >
                            Screeners
                        </Link>
                        <Link to="/" className='link menuLink' >
                            Shark Porfolio
                        </Link>
                        <Link to="/" className='link menuLink' >
                            News
                        </Link>
                        <Link to="/" className='link menuLink' >
                            Community
                        </Link>
                        <Link to="/" className='link menuLink' >
                        Blogs
                        </Link>
                        <Link to="/" className='link menuLink' >
                            Results
                        </Link>
                        <Link to="/" className='link menuLink' >
                             Portfolio
                        </Link>
                    </div>
                    <hr />

                </>
            )}
        </div>
    );
};

export default Navbar