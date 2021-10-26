import React from 'react';
import TaskbarMac, { TaskIconMac } from '../components/macOS/TaskbarMac';
import LinkedInLogo from '../assets/linkedin-logo.svg';
import GitHubLogo from '../assets/github-logo.svg';
import MacHomeIcon from '../assets/MacHomeIcon.svg';
import MacMagnifyingGlass from '../assets/MacMagnifyingGlass.png'

export default {
    title: 'Mac OS/Taskbar',
    component: TaskbarMac
}

const Template = (args) => (
    <TaskbarMac {...args}>
        <TaskIconMac>
            <img className="h-16 3xl:h-24 4xl:h-32 w-16 3xl:w-24 4xl:w-32 p-2" src={LinkedInLogo} alt="LinkedIn Logo" />
        </TaskIconMac>
        <TaskIconMac>
            <img className="h-16 3xl:h-24 4xl:h-32 w-16 3xl:w-24 4xl:w-32 p-2" src={GitHubLogo} alt="Github Logo" />
        </TaskIconMac>
        <TaskIconMac>
            <img className="h-16 3xl:h-24 4xl:h-32 w-16 3xl:w-24 4xl:w-32 p-2" src={MacMagnifyingGlass} alt="" />
        </TaskIconMac>
        <TaskIconMac>
            <img className="h-16 3xl:h-24 4xl:h-32 w-16 3xl:w-24 4xl:w-32 p-2" src={MacHomeIcon} alt="" />
        </TaskIconMac>
    </TaskbarMac>
);

export const Default = Template.bind({});