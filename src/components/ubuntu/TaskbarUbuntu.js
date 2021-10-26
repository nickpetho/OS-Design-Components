import React from 'react';
import PropTypes from 'prop-types';

export function TaskIconUbuntu({ children, className, ...props }) {
    return (
        <div className={["h-20 3xl:h-32 4xl:h-56 w-full flex items-center justify-center hover:bg-gray-Windows10TaskIcon rounded-md", className].join(' ')} {...props}>
            {children}
        </div>
    )
}

export default function TaskbarUbuntu({ className, children, ...props }) {
    return (
        <div className="h-screen flex flex-col relative">
            <div className={["h-full w-20 3xl:w-32 4xl:w-56 float-left bg-gray-LinuxTaskbar flex flex-col p-1 3xl:p-2 4xl:p-4", className].join(' ')} {...props}>
                {children}
            </div>
        </div>

    );
}

TaskbarUbuntu.propTypes = {
    className: PropTypes.string
}