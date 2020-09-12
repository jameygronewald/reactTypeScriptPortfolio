import React from "react";

interface ContactIconProps {
  iconHTML: any
  URL: string
  id: string
}

export const ContactIcon = (props: ContactIconProps) => {
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
