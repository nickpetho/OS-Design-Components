import React from 'react';
import StartW10 from '../components/windows10/StartW10';
import StartMenuW10, { StartItemW10 } from '../components/windows10/StartMenuW10';
import userLogo from '../assets/Win10UserIcon.svg';
import PowerIcon from '../assets/PowerIcon.svg';

export default {
    title: 'Windows 10/Start Menu',
    component: StartW10,
    argTypes: {
        label: { control: 'text' }
    }
}

export const StartMenuFull = (args) => (
    <StartW10 {...args}>
        <StartMenu label={'My Label'} />
    </StartW10>
)

const StartMenuSolo = (args) => (
    <StartMenuW10 {...args}>
        <StartItemW10 label={"My Name"}>
            <img src={userLogo} alt="" />
        </StartItemW10>
        <StartItemW10 label={"Power"}>
            <img src={PowerIcon} alt="" />
        </StartItemW10>
    </StartMenuW10>
)

export const StartMenu = StartMenuSolo.bind({});
StartMenu.args = {
    label: 'My label'
}