import React, { useState } from 'react';
// import { FaInstagram } from 'react-icons/fa';
import './Body.css'


const Body = () => {

    const [bodyText] = useState("Summer 2022")

    return (
        <div className='body'>
            <h2>{bodyText}</h2>
            {/* <a
                target="_blank"
                href="https://www.instagram.com/dimisongs/"
                rel="noreferrer"
            >
                <span>
                    <FaInstagram />
                </span>
            </a> */}
        </div>
    )
}

export default Body;