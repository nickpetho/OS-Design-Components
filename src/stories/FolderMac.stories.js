import React from 'react';
import FolderMac from '../components/macOS/FolderMac';

export default {
    title: 'Mac OS/Folder',
    component: FolderMac,
    argTypes: {
        label: { control: 'text' },
    }
}

const Template = (args) => <FolderMac {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'My label'
}