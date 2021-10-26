import React from 'react';
import PropTypes from 'prop-types';

export default function BannerUbuntu({ label, className }) {
    return (
        <div className={["h-8 3xl:h-16 4xl:h-24 bg-black flex items-center", className].join(' ')}>
            <h4 className="ml-4 3xl:ml-8 text-white 3xl:text-2xl 4xl:text-5xl font-bold">{label}</h4>
        </div>
    );
}

BannerUbuntu.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string
}