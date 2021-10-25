import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';
import TaskbarW10 from './TaskbarW10';

function StartW10({ children, ...props }) {
    const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

    function enableStartMenu() {
        setIsStartMenuOpen(true);
    }

    StartW10.disableStartMenu = () => {
        setIsStartMenuOpen(false);
    }

    return (
        <div>
            <div>
                {isStartMenuOpen && children}
            </div>
            <TaskbarW10 onLogoClick={enableStartMenu} />
        </div>
    );
}

const clickOutsideConfig = {
    handleClickOutside: () => (
        StartW10.disableStartMenu
    )
}

export default onClickOutside(StartW10, clickOutsideConfig);