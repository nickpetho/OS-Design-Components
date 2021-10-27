import React, { useState } from 'react';
import { Rnd } from 'react-rnd';

export default function WindowXP({ onCloseClick, label, children, className, ...props }) {
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
            <div className="flex flex-col rounded-lg bg-white h-full border-8 border-blue-XP">
                <div className="h-8 3xl:h-12 4xl:h-20 bg-blue-XP flex items-center">
                    <div className="font-medium pl-8 3xl:text-2xl 4xl:text-5xl text-white">{label}</div>
                    <div className="flex ml-auto space-x-2 pr-1">
                        <button className="h-6 w-6 rounded-sm border-2 cursor-default transition duration-200 ease-in-out bg-blue-XPButton hover:bg-blue-XPButtonHighlight text-black">
                            <svg className="overflow-visible" height="1" width="1">
                                <rect x="4" y="4" height="1" width="8" stroke="#ffffff" />
                            </svg>
                        </button>
                        <button className="h-6 w-6 rounded-sm border-2 cursor-default transition duration-200 ease-in-out bg-blue-XPButton hover:bg-blue-XPButtonHighlight text-black">
                            <svg className="overflow-visible" fill="none" height="9" width="9">
                                <rect x="6" y="0" height="9" width="9" stroke="#ffffff" />
                            </svg>
                        </button>
                        <button className="h-6 w-6 rounded-sm border-2 flex items-center justify-center transition duration-200 ease-in-out bg-red-closeButton hover:bg-red-closeButtonHighlight text-white" onClick={onCloseClick}>
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