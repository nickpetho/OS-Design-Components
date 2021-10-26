import React from 'react';
import PropTypes from 'prop-types';
import WindowsXPLogo from '../../assets/WindowsXPLogo.png';
import './TaskbarXP.css';

export function TaskIconXP({ children, className, ...props }) {
    return (
        <div className={["h-full flex items-center px-1 3xl:px-2 4xl:px-4 hover:bg-blue-Highlight ml-3", className].join(' ')} {...props}>
            {children}
        </div>
    )
}

const StartIconXP = ({ children, ...props }) => (
    <div className="h-full flex items-center px-1 hover:bg-green-StartHighlight start" {...props}>
        {children}
    </div>
)

export default function TaskbarXP({ onLogoClick, className, children, ...props }) {
    return (
        <div className={["h-12 3xl:h-20 4xl:h-32 bg-blue-XP flex items-center relative", className].join(' ')} {...props}>
            <div className="h-12 3xl:h-20 4xl:h-32 bg-green-XP_Start text-white start">
                <StartIconXP onClick={onLogoClick}>
                    <img className="h-10 3xl:h-16 4xl:h-24 w-10 3xl:w-16 4xl:w-24 p-1 3xl:p-2 4xl:p-3" src={WindowsXPLogo} alt="" />
                    <div className="mr-2 3xl:mr-6 4xl:mr-10 3xl:text-3xl 4xl:text-5xl font-bold">start</div>
                </StartIconXP>
            </div>
            {children}
        </div>
    )
}

TaskbarXP.propTypes = {
    className: PropTypes.string
}