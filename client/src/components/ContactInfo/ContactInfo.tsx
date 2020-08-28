import React from 'react'

export const ContactInfo = (props: { type: string, value: string }) => {
    return (
        <div id={props.type}>
            {props.type}: {props.value}
        </div>
    )
}
