import React from 'react';
import DocumentW10 from '../components/windows10/DocumentW10';

export default {
    title: 'Windows 10/Document',
    component: DocumentW10,
    argTypes: {
        label: { control: 'text' },
    }
};

const Template = (args) => <DocumentW10 {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'My label'
};