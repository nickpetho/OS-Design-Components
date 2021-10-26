import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';
import TaskbarXP, { TaskIconXP } from './TaskbarXP';
import LinkedInLogo from '../../assets/linkedin-logo.svg';
import GithubLogo from '../../assets/github-logo.svg';

function StartXP({ children, ...props }) {
    const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

    function enableStartMenu() {
        setIsStartMenuOpen(true);
    }

    StartXP.disableStartMenu = () => {
        setIsStartMenuOpen(false);
    }

    return (
        <div>
            <div>
                {isStartMenuOpen && children}
            </div>
            <TaskbarXP onLogoClick={enableStartMenu}>
                <TaskIconXP>
                    <img className="h-10 3xl:h-16 4xl:h-24 w-10 3xl:w-16 4xl:w-24 p-1 3xl:p-2 4xl:p-3" src={LinkedInLogo} alt="" />
                </TaskIconXP>
                <TaskIconXP>
                    <img className="h-10 3xl:h-16 4xl:h-24 w-10 3xl:w-16 4xl:w-24 p-1 3xl:p-2 4xl:p-3" src={GithubLogo} alt="" />
                </TaskIconXP>
            </TaskbarXP>
        </div>
    );
}

const clickOutsideConfig = {
    handleClickOutside: () => (
        StartXP.disableStartMenu
    )
}

export default onClickOutside(StartXP, clickOutsideConfig);