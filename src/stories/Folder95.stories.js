import React from 'react';
import Folder95 from '../components/windows95/Folder95';

export default {
    title: 'Windows 95/Folder',
    component: Folder95,
    argTypes: {
        label: { control: 'text' },
    }
};

const Template = (args) => <Folder95 {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'My label'
};