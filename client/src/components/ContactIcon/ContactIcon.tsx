import React from "react";

export const ContactIcon = (props: {
  iconHTML: any;
  URL: string;
  id: string;
}) => {
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
