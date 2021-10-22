import React from 'react';
import DocumentUbuntu from '../components/ubuntu/DocumentUbuntu';

export default {
    title: 'Ubuntu/Document',
    component: DocumentUbuntu,
    argTypes: {
        label: { control: 'text' },
    }
};

const Template = (args) => <DocumentUbuntu {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'My label'
};