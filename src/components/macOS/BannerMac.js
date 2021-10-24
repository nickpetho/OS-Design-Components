import React from 'react';
import PropTypes from 'prop-types';
import AppleLogo from '../../assets/AppleLogo.svg';

export default function BannerMac({ label, className }) {
    return (
        <div className={["h-8 bg-gray-MacBanner flex items-center", className].join(' ')}>
            <img className="h-6 w-5 mx-8" src={AppleLogo} alt="Apple Logo" />
            <h4 className="font-bold">{label}</h4>
        </div>
    );
}

BannerMac.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string
}