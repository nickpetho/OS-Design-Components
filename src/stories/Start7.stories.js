import React from 'react';
import Start7 from '../components/windows7/Start7';
import StartMenu7, { StartItem7 } from '../components/windows7/StartMenu7';

export default {
    title: 'Windows 7/Start Menu',
    component: StartMenu7,
    argTypes: {
        label: { control: 'text' }
    }
}

export const StartMenuFull = (args) => (
    <Start7 {...args}>
        <StartMenu label={'My Label'} />
    </Start7>
)

const StartMenuSolo = (args) => (
    <StartMenu7 {...args}>
        <StartItem7 label={'My label'} />
    </StartMenu7>
)

export const StartMenu = StartMenuSolo.bind({});
StartMenu.args = {
    label: 'My label'
}