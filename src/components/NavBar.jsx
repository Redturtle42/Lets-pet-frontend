import React from 'react';
import { Link } from 'react-router-dom';
import dog from '../assets/dogGif.gif'

function NavBar() {
    return (
        <div className="navBar" >
            <ul>
                <li className="logo"><Link to="/"><img src={dog} alt="dogGif.gif" /></Link></li>
                <li><Link to="/pets">Pets</Link></li>
                <li><Link to="/contact">Contact</Link></li>

            </ul>
        </div>
    )
}

export default NavBar;