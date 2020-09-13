import React from "react";
import { ContactIconProps } from "../../utils/interfaces";

export const ContactIcon: React.FC<ContactIconProps> = (props: ContactIconProps): JSX.Element => {
  return (
    <a
      id={props.id}
      href={props.URL}
      target="_blank"
      rel="noopener noreferrer"
      className="contactIcon"
    >
      {props.iconHTML}
    </a>
  );
};
