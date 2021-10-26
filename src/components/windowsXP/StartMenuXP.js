import React from 'react';
import PropTypes from 'prop-types';
import XPLogOFF from '../../assets/XPLogOff.svg'

export function StartItemXP({ label, children, className, ...props }) {
    return (
        <div className={["bg-white p-3 3xl:p-5 4xl:p-7 3xl:text-3xl 4xl:text-5xl flex text-black hover:bg-blue-XPStartHighlight hover:text-white", className].join(' ')} {...props}>
            <div className="h-6 3xl:h-10 4xl:h-16 w-6 3xl:w-10 4xl:w-16 mr-3 3xl:mr-5 4xl:mr-8 4xl:ml-3">
                {children}
            </div>
            <div>{label}</div>
        </div>
    )
}

const LogOffXP = ({ children, ...props }) => (
    <div className="p-3 3xl:p-5 4xl:p-7 flex bg-blue-XP" {...props}>
        <button className="ml-20 3xl:ml-40 4xl:ml-48 p-2 3xl:p-3 4xl:p-5 3xl:text-3xl 4xl:text-5xl flex hover:bg-blue-XPLogOff rounded 3xl:rounded-lg">
            <img className="h-6 3xl:h-10 4xl:h-16 w-6 3xl:w-10 4xl:w-16 mr-2 3xl:mr-4 4xl:mr-6" src={XPLogOFF} alt="" />
            <div>Log Off</div>
        </button>
    </div>
)

export default function StartMenuXP({ label, children, className }) {
    return (
        <div className={["bg-blue-XP flex flex-col w-56 3xl:w-108 4xl:w-144 text-white rounded-t-md 3xl:rounded-t-lg", className].join(' ')}>
            <div className="p-3 3xl:p-5 4xl:p-7 4xl:ml-5 flex font-bold 3xl:text-3xl 4xl:text-5xl">
                {label}
            </div>
            {children}
            <LogOffXP />
        </div>
    )
}

StartMenuXP.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string
}