import React, { useState } from 'react';
import { Rnd } from 'react-rnd';

export default function WindowUbuntu({ circleSize = 7, onCloseClick, label, children, className, ...props }) {
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
            <div className="rounded-lg flex flex-col bg-gray-MacWindowBG h-full">
                <div className="h-8 3xl:h-12 4xl:h-20 rounded-t-lg bg-gray-UbuntuWindow flex items-center border-b border-gray-500 shadow px-2 3xl:px-4 4xl:px-8 py-1">
                    <div className="flex mr-auto invisible space-x-2 3xl:space-x-3 4xl:space-x-4">
                        <svg className="overflow-visible" height="13" width="13" stroke="#E46F69">
                            <circle cx={circleSize} cy={circleSize} r={circleSize} fill="#FF635A" />
                        </svg>
                        <svg className="overflow-visible" height="13" width="13" stroke="#45443F">
                            <circle cx={circleSize} cy={circleSize} r={circleSize} fill="#706F68" />
                        </svg>
                        <svg className="overflow-visible" height="13" width="13" stroke="#45443F">
                            <circle cx={circleSize} cy={circleSize} r={circleSize} fill="#706F68" />
                        </svg>
                    </div>
                    <div className="font-medium 3xl:text-2xl 4xl:text-5xl text-white">{label}</div>
                    <div className="flex ml-auto space-x-2 3xl:space-x-3 4xl:space-x-4">
                        <svg className="overflow-visible" height="14" width="14" stroke="#45443F">
                            <circle cx={circleSize} cy={circleSize} r={circleSize} fill="#706F68" />
                        </svg>
                        <svg className="overflow-visible" height="14" width="14" stroke="#45443F">
                            <circle cx={circleSize} cy={circleSize} r={circleSize} fill="#706F68" />
                        </svg>
                        <button onClick={onCloseClick}>
                            <svg className="overflow-visible cursor-default" height="14" width="14" stroke="#E46F69">
                                <circle cx={circleSize} cy={circleSize} r={circleSize} fill="#FF635A" />
                            </svg>
                        </button>

                    </div>
                </div>
                <div
                    className="cursor-default flex-auto overflow-auto p-5 3xl:px-10 4xl:px-20"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {children}
                </div>
            </div>
        </Rnd>
    );
}