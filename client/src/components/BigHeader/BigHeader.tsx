import React from "react";

export const BigHeader = (props: { class: string, text: string }) => {
  return <div className={props.class}>{props.text}</div>;
};
