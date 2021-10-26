import React from 'react';
import PropTypes from 'prop-types';

export function StartItem95({ label, children, className, ...props }) {
    return (
        <div className={["3xl:text-3xl 4xl:text-5xl p-3 flex hover:bg-blue-W95Start hover:text-white", className].join(' ')} {...props}>
            <div className="h-6 3xl:h-12 4xl:h-20 w-6 3xl:w-12 4xl:w-20 mr-3 3xl:mr-5 4xl:mr-7">
                {children}
            </div>
            <div>
                {label}
            </div>
        </div>
    )
}

export default function StartMenu95({ children, className }) {
    return (
        <div className={["bg-gray-Windows95 flex flex-col w-56 3xl:w-96 4xl:w-144", className].join(' ')}>
            <div className="bg-gray-Windows95Start p-2 mb-20 3xl:mb-40 4xl:mb-48 3xl:p-3 4xl:p-5 text-xl 3xl:text-3xl 4xl:text-5xl font-bold text-gray-Windows95">
                Windows95
            </div>
            {children}
        </div>
    )
}

StartMenu95.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string
}