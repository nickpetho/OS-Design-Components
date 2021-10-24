import React from 'react';
import Windows10Logo from '../../assets/windows10logo.svg'

const TaskIcon = ({ children, ...props }) => (
    <div className="h-full flex items-center px-1 4xl:px-2 hover:bg-gray-800" {...props}>
        {children}
    </div>
);

export default function Taskbar({ onLogoClick }) {
    return (
        <div className="h-12 bg-gray-900 flex items-center relative z-40">
            <TaskIcon onClick={onLogoClick}>
                <img className="w-10 p-2 3xl:w-20 4xl:w-32 3xl:p-5 4xl:p-8" src={Windows10Logo} alt="" />
            </TaskIcon>
        </div>
    );
}
