import React from 'react';
import TaskbarUbuntu, { TaskIconUbuntu } from '../components/ubuntu/TaskbarUbuntu';
import LinkedInLogo from '../assets/linkedin-logo.svg';
import GitHubLogo from '../assets/github-logo.svg';
import UbuntuHome from '../assets/UbuntuHome.svg';
import UbuntuQuestionMark from '../assets/UbuntuQuestionMark.svg';

export default {
    title: 'Ubuntu/Taskbar',
    component: TaskbarUbuntu
}

const Template = (args) => (
    <TaskbarUbuntu {...args}>
        <TaskIconUbuntu>
            <img className="h-14" src={LinkedInLogo} alt="" />
        </TaskIconUbuntu>
        <TaskIconUbuntu>
            <img className="h-14" src={GitHubLogo} alt="" />
        </TaskIconUbuntu>
        <TaskIconUbuntu>
            <img className="h-14" src={UbuntuHome} alt="" />
        </TaskIconUbuntu>
        <TaskIconUbuntu>
            <img className="h-14" src={UbuntuQuestionMark} alt="" />
        </TaskIconUbuntu>
    </TaskbarUbuntu>
);

export const Default = Template.bind({});