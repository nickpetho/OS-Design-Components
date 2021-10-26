import React from 'react';
import TaskbarXP, { TaskIconXP } from '../components/windowsXP/TaskbarXP';
import LinkedInLogo from '../assets/linkedin-logo.svg';
import GithubLogo from '../assets/github-logo.svg';

export default {
    title: 'Windows XP/Taskbar',
    component: TaskbarXP
}

const Template = (args) => (
    <TaskbarXP {...args}>
        <TaskIconXP>
            <img className="h-10 3xl:h-16 4xl:h-24 w-10 3xl:w-16 4xl:w-24 p-1 3xl:p-2 4xl:p-3" src={LinkedInLogo} alt="" />
        </TaskIconXP>
        <TaskIconXP>
            <img className="h-10 3xl:h-16 4xl:h-24 w-10 3xl:w-16 4xl:w-24 p-1 3xl:p-2 4xl:p-3" src={GithubLogo} alt="" />
        </TaskIconXP>
    </TaskbarXP>
)

export const Default = Template.bind({});