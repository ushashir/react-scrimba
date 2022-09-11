import React from 'react';
import image from '../assets/avatar.jpeg'

function Info(props) {
    return (
        <div className='info' id='info'>
                <img src={image} alt="usha" />        
            <h1>Ushahemba Shir</h1>
            <h6>JavaScript Developer</h6>
            <button>Email</button>
            <button>LinkedIn</button>
            
        </div>
    );
}

export default Info;