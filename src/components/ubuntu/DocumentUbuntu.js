import React from 'react';
import PropTypes from 'prop-types';
import DocumentImage from '../../assets/DocumentUbuntu.svg'

export default function DocumentUbuntu({ label, className }) {
    return (
        <div className={['text-center w-14', className].join(' ')}>
            <img src={DocumentImage} alt="Document Icon" />
            <h4 className="text-sm">{label}</h4>
        </div>
    );
}

DocumentUbuntu.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string
};
