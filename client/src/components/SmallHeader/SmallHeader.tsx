import React from "react";

export const SmallHeader = (props: { text: string, id: string }) => {
  return <div className="smallHeader" id={props.id}>{props.text}</div>;
};
