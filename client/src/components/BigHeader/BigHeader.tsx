import React from "react";
import { TextProps } from "../../utils/interfaces";

export const BigHeader = (props: TextProps) => {
  return <div className={`bigHeader ${props.class}`}>{props.text}</div>;
};
