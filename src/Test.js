import React, { useState } from 'react'
import './Test.css';
import Popup from 'reactjs-popup'

const Test = () => {


    const DropdownMenu = () => {
        return (
            <div className="dropdown-menu">
                <ul>
                    <li>Menu 1</li>
                    <li>Menu 2</li>
                    <li>Menu 3</li>
                </ul>
            </div>
        );
    };


    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    return (
        <div>
            <h4>Popup - Scaler Academy</h4>
            <Popup trigger={<button> Click to open popup </button>}
                position="centre">
                <div>Scaler Academy</div>
                <h1>Hello i am herer</h1>
            </Popup>
        </div>
    )
}

export default Test
