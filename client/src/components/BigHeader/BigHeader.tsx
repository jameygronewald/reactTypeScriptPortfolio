import React from "react";
import { TextProps } from "../../utils/interfaces";

export const BigHeader: React.FC<TextProps> = (props: TextProps): JSX.Element => {
  return <div className={`bigHeader ${props.class}`}>{props.text}</div>;
};
