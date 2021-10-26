import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';
import Taskbar7, { TaskIcon7 } from './Taskbar7';
import LinkedInLogo from '../../assets/linkedin-logo.svg';
import GithubLogo from '../../assets/github-logo.svg';

function Start7({ children, ...props }) {
    const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

    function enableStartMenu() {
        setIsStartMenuOpen(true);
    }

    Start7.disableStartMenu = () => {
        setIsStartMenuOpen(false);
    }

    return (
        <div>
            <div>
                {isStartMenuOpen && children}
            </div>
            <Taskbar7 onLogoClick={enableStartMenu}>
                <TaskIcon7>
                    <img className="h-10 3xl:h-16 4xl:h-24 w-10 3xl:w-16 4xl:w-24 p-1 3xl:p-2 4xl:p-3 mx-1 3xl:mx-2 4xl:mx-3" src={LinkedInLogo} alt="LinkedIn Logo" />
                </TaskIcon7>
                <TaskIcon7>
                    <img className="h-10 3xl:h-16 4xl:h-24 w-10 3xl:w-16 4xl:w-24 p-1 3xl:p-2 4xl:p-3 mx-1 3xl:mx-2 4xl:mx-3" src={GithubLogo} alt="Github Logo" />
                </TaskIcon7>
            </Taskbar7>
        </div>
    );
}

const clickOutsideConfig = {
    handleClickOutside: () => (
        Start7.disableStartMenu
    )
}

export default onClickOutside(Start7, clickOutsideConfig);