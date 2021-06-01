import React from 'react';
import './Nav.css'

const Nav = ({ isTutorCount, isTuteeCount }) => {
    return (
        <div className="nav">
            <ul className="nav-amount">
                <li>
                    <div>
                        <p>Member</p>
                        {isTutorCount + isTuteeCount}
                    </div>     
                </li>
                <li>
                    <div>
                        <p>Tutor</p>
                        {isTutorCount}
                    </div>  
                </li>
                <li>
                    <div>
                        <p>Tutee</p>
                        {isTuteeCount}
                    </div> 
                </li>
            </ul>
        </div>
    )
}

export default Nav;