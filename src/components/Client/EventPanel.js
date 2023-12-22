// ImageTextComponent.jsx

import React from 'react';
import "../../css/Client/EventPanel.css"
const ImageTextComponent = () => {
  return (
    <>
        <div className="description">
        <div className="text-container">
            <div>
                <h2>Description</h2>
                <p>
                    Get ready to witness the convergence of innovation, inspiration, and the unmistakable charm of Dash at "FlutterFiesta 2023"! 
                </p>
                <br/>
                <p>
                    We are thrilled to welcome you to a celebration where the boundaries of technology dissolve, and the future unfolds with boundless possibilities
                </p>
            </div>
        </div>
        <div className="image-container">
            <img src="/assets/Dash.png" alt="Description" />
        </div>
        </div>
        <div className="event-time">
            <div className="timing">
                <img src="/assets/clock.png" alt="Description" className='picture'/>
                <span>8:30 AM</span>
            </div>
            <div className="timing">
                <img src="/assets/location.png" alt="Description" className='picture'/>
                <span>Esi, TinZaouatin</span>
            </div>
            <div className="timing">
                <img src="/assets/agenda.png" alt="Description" className='picture'/>
                <span>02-01-2024</span>
            </div>
        </div>
    </>
  );
};

export default ImageTextComponent;
