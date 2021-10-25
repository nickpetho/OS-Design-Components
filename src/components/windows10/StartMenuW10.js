import React from 'react';
import PropTypes from 'prop-types';

export function StartItemW10({ label, children, className, ...props }) {
    return (
        <div className={["p-3 3xl:p-4 4xl:p-5 3xl:px-5 4xl:px-6 3xl:mt-24 4xl:mt-56 flex hover:bg-gray-Windows10", className].join(' ')} {...props}>
            <div className="w-6 h-6 mr-3 3xl:w-12 4xl:w-24 3xl:h-12 4xl:h-24 3xl:mr-6">
                {children}
            </div>
            <div className="3xl:text-2xl 4xl:text-5xl 3xl:mt-2">
                {label}
            </div>
        </div>
    )
}

export default function StartMenuW10({ label, children, className }) {
    return (
        <div className={["bg-gray-Windows10TaskIcon flex flex-col w-56 3xl:w-84 4xl:w-144 text-white z-50", className].join(' ')}>
            <div className="bg-gray-Windows10 p-3 3xl:p-5 4xl:p-7 font-bold 3xl:text-3xl 4xl:text-5xl mb-20">
                {label}
            </div>
            {children}
        </div>
    );
}

StartMenuW10.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string
}
