import './Navbar.css';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../Button/Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Showcase <ion-icon name="diamond-outline"  />
                    </NavLink>
                    <div className="menu-icon" onClick={handleClick}>
                        <ion-icon name={click ? "flash-outline" : "flash-off-outline"} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/planningHunt' className='nav-links' onClick={closeMobileMenu}>
                                Plan a Hunt!
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/aboutUs' className='nav-links' onClick={closeMobileMenu}>
                                About Us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </NavLink>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn-secondary'>Sign Up</Button>}
                </div>
            </nav>
        </>
    )
}





export default Navbar
