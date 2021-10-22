import React from 'react';
import PropTypes from 'prop-types';
import FolderImage from '../../assets/Folder7.png';

export default function Folder7({ label, className }) {
    return (
        <div className={['text-center w-14', className].join(' ')}>
            <img src={FolderImage} alt="Folder Icon" />
            <h4 className="text-sm">{label}</h4>
        </div>
    );
}

Folder7.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string
}