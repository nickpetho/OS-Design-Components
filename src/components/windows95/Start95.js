import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';
import Taskbar95, { TaskIcon95 } from './Taskbar95';
import LinkedInLogo from '../../assets/linkedin-logo.svg';
import GithubLogo from '../../assets/github-logo.svg';

function Start95({ children, ...props }) {
    const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

    function enableStartMenu() {
        setIsStartMenuOpen(true);
    }

    Start95.disableStartMenu = () => {
        setIsStartMenuOpen(false);
    }

    return (
        <div>
            <div>
                {isStartMenuOpen && children}
            </div>
            <Taskbar95 onLogoClick={enableStartMenu}>
                <TaskIcon95>
                    <img className="w-10 p-2" src={LinkedInLogo} alt="LinkedIn Logo" />
                </TaskIcon95>
                <TaskIcon95>
                    <img className="w-10 p-2" src={GithubLogo} alt="Github Logo" />
                </TaskIcon95>
            </Taskbar95>
        </div>
    );
}

const clickOutsideConfig = {
    handleClickOutside: () => (
        Start95.disableStartMenu
    )
}

export default onClickOutside(Start95, clickOutsideConfig);