import React, { useState } from 'react'
import './Header.css'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {

    const [isVisibleB, setVisibleB] = useState(false);
    const [isVisibleS, setVisibleS] = useState(false);
    const [isVisibleE, setVisibleE] = useState(false);

    const DropDown = ({ text }) => {
        return (
            <>
                <div>
                    <ul className='dropdown-menu-ul'>
                        <li className='dropdown-menu-li'>New {text}</li>
                        <li className='dropdown-menu-li'>Best {text}</li>
                        <li className='dropdown-menu-li'>Popular {text}</li>
                        <li className='dropdown-menu-li'>Latest {text}</li>
                        <li className='dropdown-menu-li'>Upcoming {text}</li>
                    </ul>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="navbar navbar-expand-lg">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className='nav-item'>
                    <Link className='nav-link' to="/">Home</Link>
                    </li>
                    <li className='nav-item'>
                    <Link className='nav-link' to="/about">About</Link>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'></a>
                    </li>
                    <li className='nav-item'>
                        <div>
                            <button className='nav-link' onClick={() => { setVisibleB(!isVisibleB) }} onMouseEnter={() => { setVisibleB(true) }} onMouseLeave={() => { setVisibleB(false) }}>Bikes</button>
                            {isVisibleB && <DropDown text={'Bike'} />}
                        </div>
                    </li>
                    <li className='nav-item'>
                        <div>
                            <button className='nav-link' onClick={() => { setVisibleS(!isVisibleS) }} onMouseEnter={() => { setVisibleS(true) }} onMouseLeave={() => { setVisibleS(false) }}>Scooters</button>
                            {isVisibleS && <DropDown text={'Scooter'} />}
                        </div>
                    </li>
                    <li className='nav-item'>
                        <div>
                            <button className='nav-link' onClick={() => { setVisibleE(!isVisibleE) }} onMouseEnter={() => { setVisibleE(true) }} onMouseLeave={() => { setVisibleE(false) }}>Electric Zones</button>
                            {isVisibleE && <DropDown text={'Electric Bikes'} />}
                        </div>
                    </li>
                    <li className='nav-item'>
                    <Link className='nav-link' to="/favourite">Cart</Link>
                    </li>
                </ul>

                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-danger" type="submit" onClick={() => { alert("Wait !!") }}>Search</button>
                </form>
                <div>
                    
                </div>
            </div>
        </>
    )
}

export default Header
