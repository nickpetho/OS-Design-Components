import React from 'react';
import Folder7 from '../components/windows7/Folder7';

export default {
    title: 'Windows 7/Folder',
    component: Folder7,
    argTypes: {
        label: { control: 'text' },
    }
};

const Template = (args) => <Folder7 {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'My label'
};