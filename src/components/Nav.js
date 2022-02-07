import React, { useState } from 'react';
import './Nav.css'

const Nav = () => {

    const [navText] = useState("Dimi")

    return (
        <div className='nav'>
            <h1>{navText}</h1>
        </div>
    )
}

export default Nav;