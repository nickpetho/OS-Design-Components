import React from 'react';
import BannerUbuntu from '../components/ubuntu/BannerUbuntu';

export default {
    title: 'Ubuntu/Banner',
    component: BannerUbuntu,
    argTypes: {
        label: { control: 'text' }
    }
}

const Template = (args) => <BannerUbuntu {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'My label'
}