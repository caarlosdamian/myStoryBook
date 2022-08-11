import React from 'react'
import { Button,ButtonProps } from './Button'


export default {
    title: 'Form/Button-Test', // <- this is the title of the story in the storybook panel /form -> dentro de una carpeta 
    component: Button, // <- this is the component that will be rendered
    args:{
        children:'Button',
    }
}

// This is the default export of the storybook stories file. 
export const Primary = () => <Button >Primary</Button> // <- this is the component that will be rendered
export const Secondary = () => <Button variant='secondary'>Secondary</Button> // <- this is the component that will be rendered
export const Success = () => <Button  variant='success'>Success</Button> // <- this is the component that will be rendered
export const Danger = () => <Button  variant='danger'>Danger</Button> // <- this is the component that will be rendered



const Template = args => <Button {...args} />

export const PrimaryButton = Template.bind({})

PrimaryButton.args = {
    variant: 'primary',
    children:'Primary Args'
}

// export const longPrimary = Template.bind({})

// longPrimary.args = {
//     ...PrimaryButton.args,
//     children:'Long Primary Args'
// }

// export const SecondaryButton = Template.bind({})

// SecondaryButton.args = {
//     variant: 'secondary',
//     children:'Secondary Args'
// }
