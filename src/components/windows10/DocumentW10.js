import React from 'react';
import PropTypes from 'prop-types';
import DocumentImage from '../../assets/document-icon.svg'

export default function DocumentW10({ label, className }) {
    return (
        <div className={['text-center w-12', className].join(' ')}>
            <img src={DocumentImage} alt="Document Icon" />
            <h4 className="text-sm">{label}</h4>
        </div>
    );
}

DocumentW10.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string
};
