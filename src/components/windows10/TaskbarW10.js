import React from 'react';
import PropTypes from 'prop-types';
import Windows10Logo from '../../assets/windows10logo.svg'

export function TaskIconW10({ children, className, ...props }) {
    return (
        <div className={['h-full flex items-center px-1 hover:bg-gray-Windows10TaskIcon', className].join(' ')} {...props}>
            {children}
        </div>
    )
}

export default function TaskbarW10({ onLogoClick, className, children, ...props }) {
    return (
        <div className={['h-12 bg-gray-Windows10Taskbar flex items-center relative z-40', className].join(' ')} {...props}>
            <TaskIconW10 onClick={onLogoClick}>
                <img className="w-10 p-2" src={Windows10Logo} alt="Windows 10 Logo" />
            </TaskIconW10>
            {children}
        </div>
    );
}

TaskbarW10.propTypes = {
    className: PropTypes.string
}
