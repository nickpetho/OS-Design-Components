import React from 'react';
import TaskbarW10 from '../components/windows10/TaskbarW10';
import { TaskIconW10 } from '../components/windows10/TaskbarW10';
import LinkedInLogo from '../assets/linkedin-logo.svg';
import GithubLogo from '../assets/github-logo.svg';

export default {
    title: 'Windows 10/Taskbar',
    component: TaskbarW10
}

const Template = (args) => (
    <div className="w-full absolute bottom-0">
        <TaskbarW10 {...args}>
            <TaskIconW10>
                <img className="w-10 p-2" src={LinkedInLogo} alt="LinkedIn Logo" />
            </TaskIconW10>
            <TaskIconW10>
                <img className="w-10 p-2" src={GithubLogo} alt="Github Logo" />
            </TaskIconW10>
        </TaskbarW10 >
    </div>
);

export const Default = Template.bind({});