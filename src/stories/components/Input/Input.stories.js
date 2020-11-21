import React from "react";
import Input from "./Input";

export default {
    title: 'Form/CustomInput',
    component: Input,
}

export const Small = () => <Input size='smallinputCompo' />
export const Medium = () => <Input size='mediuminputCompo' />
export const Large = () => <Input size='largeinputCompo' />
