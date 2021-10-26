import React from 'react';
import Taskbar95, { TaskIcon95 } from '../components/windows95/Taskbar95';
import LinkedInLogo from '../assets/linkedin-logo.svg';
import GithubLogo from '../assets/github-logo.svg';

export default {
    title: 'Windows 95/Taskbar',
    component: Taskbar95
}

const Template = (args) => (
    <Taskbar95 {...args}>
        <TaskIcon95>
            <img className="h-10 3xl:h-16 4xl:h-24 w-10 3xl:w-16 4xl:w-24 p-1 3xl:p-2 4xl:p-3" src={LinkedInLogo} alt="" />
        </TaskIcon95>
        <TaskIcon95>
            <img className="h-10 3xl:h-16 4xl:h-24 w-10 3xl:w-16 4xl:w-24 p-1 3xl:p-2 4xl:p-3" src={GithubLogo} alt="" />
        </TaskIcon95>
    </Taskbar95>
)

export const Default = Template.bind({});