import React from 'react';
import Start95 from '../components/windows95/Start95';
import StartMenu95, { StartItem95 } from '../components/windows95/StartMenu95';
import ShutDownLogo from '../assets/95ShutDownIcon.png';
import MagnifyingGlass from '../assets/95MagnifingGlass.png';

export default {
    title: 'Windows 95/Start Menu',
    component: Start95,
    argTypes: {
        label: { control: 'text' }
    }
}

export const StartMenuFull = (args) => (
    <Start95 {...args}>
        <StartMenu label={'My Label'} />
    </Start95>
)

const StartMenuSolo = (args) => (
    <StartMenu95 {...args}>
        <StartItem95 label={"My Name"}>
            <img src={MagnifyingGlass} />
        </StartItem95>
        <StartItem95 label={"Shut Down..."}>
            <img src={ShutDownLogo} />
        </StartItem95>
    </StartMenu95>
)

export const StartMenu = StartMenuSolo.bind({});
StartMenu.args = {
    label: 'My label'
}