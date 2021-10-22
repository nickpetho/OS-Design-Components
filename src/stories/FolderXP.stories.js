import React from 'react';
import FolderXP from '../components/windowsXP/FolderXP';

export default {
    title: 'Windows XP/Folder',
    component: FolderXP,
    argTypes: {
        label: { control: 'text' }
    }
}

const Template = (args) => <FolderXP {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'My label'
};