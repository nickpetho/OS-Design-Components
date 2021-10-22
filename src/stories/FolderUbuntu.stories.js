import React from 'react';
import FolderUbuntu from '../components/ubuntu/FolderUbuntu';

export default {
    title: 'Ubuntu/Folder',
    component: FolderUbuntu,
    argTypes: {
        label: { control: 'text' },
    }
};

const Template = (args) => <FolderUbuntu {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'My label'
};