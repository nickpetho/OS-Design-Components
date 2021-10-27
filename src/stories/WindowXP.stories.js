import React from 'react';
import WindowXP from '../components/windowsXP/WindowXP';

export default {
    title: 'Windows XP/Window',
    component: WindowXP,
    argTypes: {
        label: { control: 'text' }
    }
}

const Template = (args) => {
    function handleCloseClick() {
        alert('Window was closed.')
    }

    return (
        <div className="h-screen">
            <WindowXP onCloseClick={handleCloseClick} {...args}>
                Bacon ipsum dolor amet short ribs rump burgdoggen capicola short loin beef, ribeye pork belly. Buffalo chislic burgdoggen chicken,
                ball tip brisket tongue pork loin porchetta pork chop. Chicken shank rump, pork chop pastrami pork loin pork buffalo turkey brisket
                short ribs. Doner shoulder pork belly, beef pork chop tongue pastrami jowl kielbasa strip steak short loin bacon swine.

                Flank spare ribs shoulder short ribs burgdoggen doner kielbasa bacon chuck porchetta chicken brisket. Pork belly prosciutto
                tenderloin beef ribs salami brisket venison cow drumstick burgdoggen boudin beef picanha chislic meatloaf. Salami pork t-bone
                buffalo prosciutto ball tip alcatra ground round pork chop pancetta kevin kielbasa andouille jerky. Spare ribs shank swine cupim
                pork loin jerky burgdoggen brisket pig. Turkey beef ribs pork hamburger. Short ribs pork chop boudin, t-bone ham hock meatloaf
                hamburger corned beef tenderloin pork loin sausage picanha.
            </WindowXP>
        </div>
    )
}

export const Default = Template.bind({});
Default.args = {
    label: 'My Label'
}