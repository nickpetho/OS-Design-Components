import React from 'react';
import Document95 from '../components/windows95/Document95';

export default {
    title: 'Windows 95/Document',
    component: Document95,
    argTypes: {
        label: { control: 'text' },
    }
}

const Template = (args) => <Document95 {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'My label'
};