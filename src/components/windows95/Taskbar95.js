import React from 'react';
import PropTypes from 'prop-types';
import Windows95Logo from '../../assets/Windows95Logo.svg';

export function TaskIcon95({ children, className, ...props }) {
    return (
        <div className={["h-full flex items-center px-1 3xl:px-2 4xl:px-4 hover:bg-gray-300 ml-3", className].join(' ')} {...props}>
            {children}
        </div>
    )
}

const StartIcon = ({ children, ...props }) => (
    <div className="h-full flex items-center px-1 hover:bg-gray-300" {...props}>
        {children}
    </div>
);

export default function Taskbar95({ onLogoClick, className, children, ...props }) {
    return (
        <div className={["h-12 3xl:h-20 4xl:h-32 bg-gray-Windows95 flex items-center relative", className].join(' ')} {...props}>
            <StartIcon onClick={onLogoClick}>
                <img className="h-10 3xl:h-16 4xl:h-24 w-10 3xl:w-16 4xl:w-24 p-1 3xl:p-2 4xl:p-3" src={Windows95Logo} alt="" />
                <div className="font-black 3xl:text-3xl 4xl:text-5xl pr-1 3xl:pr-3 4xl:pr-5">Start</div>
            </StartIcon>
            {children}
        </div>
    )
}

Taskbar95.propTypes = {
    className: PropTypes.string
}