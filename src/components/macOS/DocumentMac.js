import React from 'react';
import PropTypes from 'prop-types';
import DocumentImage from '../../assets/DocumentMac.png'

export default function DocumentMac({ label, className }) {
    return (
        <div className={['text-center w-12', className].join(' ')}>
            <img src={DocumentImage} alt="Document Icon" />
            <h4 className="text-sm">{label}</h4>
        </div>
    );
}

DocumentMac.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string
};
