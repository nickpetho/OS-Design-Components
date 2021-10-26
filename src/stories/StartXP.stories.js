import React from 'react';
import StartXP from '../components/windowsXP/StartXP';
import StartMenuXP, { StartItemXP } from '../components/windowsXP/StartMenuXP';
import MagnifyingGlass from '../assets/XPMagnifyingGlass.png'

export default {
    title: 'Windows XP/Start Menu',
    component: StartXP,
    argTypes: {
        label: { control: 'text' }
    }
}

export const StartMenuFull = (args) => (
    <StartXP {...args}>
        <StartMenu label={'My Label'} />
    </StartXP>
)

const StartMenuSolo = (args) => (
    <StartMenuXP {...args}>
        <StartItemXP label={'My Label'} >
            <img src={MagnifyingGlass} />
        </StartItemXP>
    </StartMenuXP>
)

export const StartMenu = StartMenuSolo.bind({});
StartMenu.args = {
    label: 'My label'
}