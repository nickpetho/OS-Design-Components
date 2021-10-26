import React from 'react';
import PropTypes from 'prop-types';

export function TaskIconMac({ children, className, ...props }) {
    return (
        <div className={["h-full w-24 3xl:w-40 flex 4xl:w-56 items-center justify-center px-1 hover:bg-gray-MacTaskIcon", className].join(' ')} {...props}>
            {children}
        </div>
    )
}

export default function TaskbarMac({ className, children, ...props }) {
    return (
        <div className="flex justify-center">
            <div className={["h-20 3xl:h-32 4xl:h-48 bg-gray-MacTaskbar flex rounded-t-md 3xl:rounded-t-lg", className].join(' ')} {...props}>
                {children}
            </div >
        </div>

    );
}

TaskbarMac.propTypes = {
    className: PropTypes.string
}