import React from 'react';
import PropTypes from 'prop-types';
import Windows7Logo from '../../assets/Windows7Logo.png';

export function TaskIcon7({ children, className, ...props }) {
    return (
        <div className={["h-full flex items-center px-1 3xl:px-2 4xl:px-4 hover:bg-gray-Windows7Highlight", className].join(' ')} {...props}>
            {children}
        </div>
    )
}

export default function Taskbar7({ onLogoClick, className, children, ...props }) {
    return (
        <div className={["h-12 3xl:h-20 4xl:h-32 bg-gray-Windows7 flex items-center relative", className].join(' ')} {...props}>
            <TaskIcon7 onClick={onLogoClick}>
                <img className="h-10 3xl:h-16 4xl:h-24 w-10 3xl:w-16 4xl:w-24 p-1 mx-1 3xl:mx-2 4xl:mx-3" src={Windows7Logo} alt="Windows 7 Logo" />
            </TaskIcon7>
            {children}
        </div>
    )
}

Taskbar7.propTypes = {
    className: PropTypes.string
}