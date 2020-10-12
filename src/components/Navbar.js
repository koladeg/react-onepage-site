import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from './Button';
import { IconContext } from "react-icons/lib";

const Navbar = () => {
    const [click, setClick] = useState(false)

    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
     }

     useEffect(() => {
         showButton()
     }, [])

     window.addEventListener('resize', showButton)

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
           <div className="navbar">
               <div className="navbar__container container">
                    <Link to ='/' className="navbar__logo" onClick= {closeMobileMenu}>
                        <MdFingerprint className='navbar__icon' />
                        BANGER
                    </Link>
                    <div className="menu__icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav__menu active' : 'nav__menu'} >
                        <li className="nav__item">
                            <Link to='/' className="nav__links">
                                Home
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to='/services' className="nav__links">
                                Services
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to='/products' className="nav__links">
                                Products
                            </Link>
                        </li>                               
                        <li className="nav__btn">
                         {button ? (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--outline'>SIGN UP</Button>
                            </Link>
                         ) : (
                             <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                                    SIGN UP
                                </Button> 
                             </Link>
                         )}
                        </li>       
                        
                    </ul>
                </div>
           </div> 
        </IconContext.Provider>
        </>
    );
};

export default Navbar;