import React from 'react';
import PropTypes from 'prop-types';
import FolderImage from '../../assets/FolderUbuntu.svg'

export default function FolderUbuntu({ label, className }) {
    return (
        <div className={['text-center w-14', className].join(' ')}>
            <img src={FolderImage} alt="Folder Icon" />
            <h4 className="text-sm">{label}</h4>
        </div>
    );
}

FolderUbuntu.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string
};