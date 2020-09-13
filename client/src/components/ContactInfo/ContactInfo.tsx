import React from 'react'
import { ContactInfoProps } from "../../utils/interfaces";

export const ContactInfo: React.FC<ContactInfoProps> = (props: ContactInfoProps): JSX.Element => {
    return (
        <div id={props.type}>
            {props.type}: {props.value}
        </div>
    )
}
