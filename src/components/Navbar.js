import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);  //initial value is false

    const handleClick = () => setClick(!click); //sets the opposite value of click on click
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        FitHouse
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/regional-workouts' className='nav-links' onClick={closeMobileMenu}>
                                Regional Workouts
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/food-court' className='nav-links' onClick={closeMobileMenu}>
                                Food Court
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/programs' className='nav-links' onClick={closeMobileMenu}>
                                Programs
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/personal-trainers' className='nav-links' onClick={closeMobileMenu}>
                                Personal Trainers
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
