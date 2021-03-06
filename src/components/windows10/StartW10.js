import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';
import TaskbarW10, { TaskIconW10 } from './TaskbarW10';
import LinkedInLogo from '../../assets/linkedin-logo.svg';
import GithubLogo from '../../assets/github-logo.svg';

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
            <TaskbarW10 onLogoClick={enableStartMenu}>
                <TaskIconW10>
                    <img className="w-10 p-2" src={LinkedInLogo} alt="LinkedIn Logo" />
                </TaskIconW10>
                <TaskIconW10>
                    <img className="w-10 p-2" src={GithubLogo} alt="Github Logo" />
                </TaskIconW10>
            </TaskbarW10>
        </div>
    );
}

const clickOutsideConfig = {
    handleClickOutside: () => (
        StartW10.disableStartMenu
    )
}

export default onClickOutside(StartW10, clickOutsideConfig);