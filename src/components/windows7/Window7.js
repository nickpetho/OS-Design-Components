import React, { useState } from 'react';
import { Rnd } from 'react-rnd';

export default function Window7({ onCloseClick, label, children, className, ...props }) {
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
            <div className="flex flex-col rounded-lg bg-white h-full border-8 border-gray-Windows7">
                <div className="h-8 3xl:h-12 4xl:h-20 bg-gray-Windows7 flex items-center">
                    <div className="font-medium pl-8 3xl:text-2xl 4xl:text-5xl text-white">{label}</div>
                    <div className="flex ml-auto self-start">
                        <button className="h-5 w-10 rounded-bl-sm border border-black cursor-default transition duration-200 ease-in-out bg-gray-Windows7Button hover:bg-gray-Windows7Highlight text-white">
                            <svg className="overflow-visible" height="1" width="1">
                                <rect x="15" y="4" height="1" width="8" stroke="#ffffff" />
                            </svg>
                        </button>
                        <button className="h-5 w-8 border border-black cursor-default transition duration-200 ease-in-out bg-gray-Windows7Button hover:bg-gray-Windows7Highlight text-white">
                            <svg className="overflow-visible" fill="none" height="9" width="9">
                                <rect x="10" y="0" height="9" width="9" stroke="#ffffff" />
                            </svg>
                        </button>
                        <button className="h-5 w-12 rounded-br-sm border border-black flex items-center justify-center transition duration-200 ease-in-out bg-red-closeButton hover:bg-red-closeButtonHighlight text-white" onClick={onCloseClick}>
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