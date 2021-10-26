import React from 'react';
import Taskbar7, { TaskIcon7 } from '../components/windows7/Taskbar7';
import LinkedInLogo from '../assets/linkedin-logo.svg';
import GithubLogo from '../assets/github-logo.svg';

export default {
    title: 'Windows 7/Taskbar',
    component: Taskbar7
}

const Template = (args) => (
    <Taskbar7 {...args}>
        <TaskIcon7>
            <img className="h-10 3xl:h-16 4xl:h-24 w-10 3xl:w-16 4xl:w-24 p-1 3xl:p-2 4xl:p-3 mx-1 3xl:mx-2 4xl:mx-3" src={LinkedInLogo} alt="LinkedIn Logo" />
        </TaskIcon7>
        <TaskIcon7>
            <img className="h-10 3xl:h-16 4xl:h-24 w-10 3xl:w-16 4xl:w-24 p-1 3xl:p-2 4xl:p-3 mx-1 3xl:mx-2 4xl:mx-3" src={GithubLogo} alt="Github Logo" />
        </TaskIcon7>
    </Taskbar7 >
)

export const Default = Template.bind({});