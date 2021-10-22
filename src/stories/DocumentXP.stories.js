import React from 'react';
import DocumentXP from '../components/windowsXP/DocumentXP';

export default {
    title: 'Windows XP/Document',
    component: DocumentXP,
    argTypes: {
        label: { control: 'text' }
    }
}

const Template = (args) => <DocumentXP {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'My label'
};