import React from 'react';
import FolderW10 from '../components/windows10/FolderW10';

export default {
    title: 'Windows 10/Folder',
    component: FolderW10,
    argTypes: {
        label: { control: 'text' },
    }
};

const Template = (args) => <FolderW10 {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'My label'
};