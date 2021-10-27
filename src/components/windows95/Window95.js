import React, { useState } from 'react';
import { Rnd } from 'react-rnd';

export default function Window95({ onCloseClick, label, children, className, ...props }) {
    const [disableDragging, setDisableDragging] = useState(false);

    function handleMouseEnter() {
        setDisableDragging(true);
    }

    function handleMouseLeave() {
        setDisableDragging(false);
    }

    return (
        <Rnd
            className="z-10 overflow-hidden"
            bounds="parent"
            default={{
                x: window.innerWidth / 9,
                y: window.innerHeight / 16,
                width: window.innerWidth * (3 / 4),
                height: window.innerHeight * (13 / 16)
            }}
            disableDragging={disableDragging}
            minWidth={700}
            minHeight={500}
        >
            <div className="flex flex-col bg-white h-full border-4 border-gray-Windows95Window">
                <div className="h-8 3xl:h-12 4xl:h-20 border-b-4 border-gray-Windows95Window bg-blue-W95WindowBar flex items-center">
                    <div className="font-medium pl-8 3xl:text-2xl 4xl:text-5xl text-white">{label}</div>
                    <div className="flex ml-auto space-x-1.5 pr-1">
                        <button className="h-5 w-5 cursor-default transition duration-200 ease-in-out bg-gray-Windows95Window hover:bg-gray-Windows95WindowHover text-black">
                            <svg className="overflow-visible" height="1" width="1">
                                <rect x="6" y="4" height="1" width="8" stroke="#000000" />
                            </svg>
                        </button>
                        <button className="h-5 w-5 cursor-default transition duration-200 ease-in-out bg-gray-Windows95Window hover:bg-gray-Windows95WindowHover text-black">
                            <svg className="overflow-visible" fill="none" height="9" width="9">
                                <rect x="6" y="0" height="9" width="9" stroke="#000000" />
                            </svg>
                        </button>
                        <button className="h-5 w-5 flex items-center justify-center transition duration-200 ease-in-out bg-gray-Windows95Window hover:bg-gray-Windows95WindowHover text-black" onClick={onCloseClick}>
                            X
                        </button>
                    </div>
                </div>
                <div
                    className="cursor-default flex-auto overflow-auto text-black p-5 3xl:px-10 4xl:px-20"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {children}
                </div>
            </div>
        </Rnd>
    );
}