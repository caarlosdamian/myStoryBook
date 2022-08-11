import React from 'react'
import { Input } from './Input'

export default{
    title: 'Form/Input',
    component: Input
}

export const Default = () => <Input placeholder="placeholder" />
export const Small = () => <Input placeholder="Small"  size='small'/>
export const Medium = () => <Input placeholder="Medium"size='medium' />
export const Large = () => <Input placeholder="Large"  size='large'/>

Small.storyName = 'Small Input'