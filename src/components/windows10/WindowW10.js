import React, { useState } from 'react';
import { Rnd } from 'react-rnd';

export default function WindowW10({ onCloseClick, label, children, className, ...props }) {
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
            <div className="flex flex-col bg-gray-Windows10TaskIcon h-full">
                <div className="h-8 3xl:h-12 4xl:h-20 bg-black flex items-center">
                    <div className="flex mr-auto invisible">
                        <button className="h-8 w-16 cursor-default bg-black hover:bg-gray-Windows10WindowHighlight text-white">
                            <svg className="overflow-visible" height="1" width="10">
                                <rect x="26" y="0" height="1" width="10" stroke="#ffffff" />
                            </svg>
                        </button>
                        <button className="h-8 w-16 cursor-default bg-black hover:bg-gray-Windows10WindowHighlight text-white">
                            <svg className="overflow-visible" fill="none" height="10" width="10">
                                <rect x="26" y="0" height="10" width="10" stroke="#ffffff" />
                            </svg>
                        </button>
                        <button className="h-8 w-16 bg-black hover:bg-red-closeButton text-white">
                            X
                        </button>
                    </div>
                    <div className="font-medium 3xl:text-2xl 4xl:text-5xl text-white">{label}</div>
                    <div className="flex ml-auto">
                        <button className="h-8 w-16 cursor-default transition duration-300 ease-in-out bg-black hover:bg-gray-Windows10WindowHighlight text-white">
                            <svg className="overflow-visible" height="1" width="10">
                                <rect x="26" y="0" height="1" width="10" stroke="#ffffff" />
                            </svg>
                        </button>
                        <button className="h-8 w-16 cursor-default transition duration-300 ease-in-out bg-black hover:bg-gray-Windows10WindowHighlight text-white">
                            <svg className="overflow-visible" fill="none" height="10" width="10">
                                <rect x="26" y="0" height="10" width="10" stroke="#ffffff" />
                            </svg>
                        </button>
                        <button className="h-8 w-16 transition duration-300 ease-in-out bg-black hover:bg-red-closeButton text-white" onClick={onCloseClick}>
                            X
                        </button>
                    </div>
                </div>
                <div
                    className="cursor-default flex-auto overflow-auto text-white p-5 3xl:px-10 4xl:px-20"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {children}
                </div>
            </div>
        </Rnd>
    );
}