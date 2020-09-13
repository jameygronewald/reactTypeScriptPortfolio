import React from "react";
import { TextProps } from "../../utils/interfaces";

export const SmallHeader: React.FC<TextProps> = (props: TextProps): JSX.Element => {
  return <div className={`smallHeader ${props.class}`}>{props.text}</div>;
};
