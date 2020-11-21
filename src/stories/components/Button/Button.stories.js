import React from "react";
import Button from "./Button";

export default {
    title: 'Form/CustomButton',
    component: Button,
}

export const Primary = () => <Button variant='primaryButtonCompo'>Primary</Button>
export const Secondary = () => <Button variant='secondaryButtonCompo'>Secondary</Button>
export const Success = () => <Button variant='successButtonCompo'>Success</Button>
export const Danger = () => <Button variant='dangerButtonCompo'>Danger</Button>
