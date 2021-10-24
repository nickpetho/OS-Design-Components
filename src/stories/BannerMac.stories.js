import React from 'react';
import BannerMac from '../components/macOS/BannerMac';

export default {
    title: 'Mac OS/Banner',
    component: BannerMac,
    argTypes: {
        label: { control: 'text' }
    }
}

const Template = (args) => <BannerMac {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'My Label'
};