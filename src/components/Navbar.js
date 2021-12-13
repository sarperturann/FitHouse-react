import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);  //initial value is false
    const [button ,setButton] = useState(true);

    const handleClick = () => setClick(!click); //sets the opposite value of click on click
    const closeMobileMenu = () => setClick(false);

    const displayButton = () => { // if the navbar is not visible, change it to a little menu
        if(window.innerWidth <= 960)
            setButton(false);
        else 
            setButton(true);
    };

    window.addEventListener( 'resize', displayButton);

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
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
