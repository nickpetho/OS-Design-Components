import React from 'react';
import Document7 from '../components/windows7/Document7';

export default {
    title: 'Windows 7/Document',
    component: Document7,
    argTypes: {
        label: { control: 'text' },
    }
};

const Template = (args) => <Document7 {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'My label'
};