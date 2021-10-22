import React from 'react';
import PropTypes from 'prop-types';
import DocumentImage from '../../assets/Document95.svg';

export default function Document95({ label, className }) {
    return (
        <div className={['text-center w-14', className].join(' ')}>
            <img src={DocumentImage} alt="Document Icon" />
            <h4 className="text-sm">{label}</h4>
        </div>
    );
}

Document95.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string
}