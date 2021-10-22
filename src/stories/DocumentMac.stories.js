import React from 'react';
import DocumentMac from '../components/macOS/DocumentMac';

export default {
    title: 'Mac OS/Document',
    component: DocumentMac,
    argTypes: {
        label: { control: 'text' },
    }
}

const Template = (args) => <DocumentMac {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'My label'
}