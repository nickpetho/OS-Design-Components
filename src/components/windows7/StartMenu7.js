import React from 'react';
import PropTypes from 'prop-types';

export function StartItem7({ label, children, className, ...props }) {
    return (
        <div className={["p-3 3xl:px-5 4xl:p-4 4xl:px-10 3xl:text-3xl 4xl:text-5xl flex hover:bg-gray-Windows7Highlight hover:text-black", className].join(' ')} {...props}>
            {label}
        </div>
    )
}

export default function StartMenu7({ children, className }) {
    return (
        <div className={["bg-gray-Windows7 flex flex-col w-56 3xl:w-96 4xl:w-144 text-white rounded-t-md 3xl:rounded-t-lg", className].join(' ')}>
            {children}
        </div>
    )
}

StartMenu7.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string
}