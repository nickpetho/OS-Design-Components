import React from 'react';
import PropTypes from 'prop-types';
import FolderImage from '../../assets/FolderW10.svg'

export default function FolderW10({ label, className }) {
    return (
        <div className={['text-center w-14', className].join(' ')}>
            <img src={FolderImage} alt="Folder Icon" />
            <h4 className="text-sm">{label}</h4>
        </div>
    );
}

FolderW10.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string
};