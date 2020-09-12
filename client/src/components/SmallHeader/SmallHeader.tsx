import React from "react";
import { TextProps } from "../../utils/interfaces";

export const SmallHeader = (props: TextProps) => {
  return <div className={`smallHeader ${props.class}`}>{props.text}</div>;
};
