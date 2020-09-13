import React from "react";
import { TextProps } from "../../utils/interfaces";

export const RegularText: React.FC<TextProps> = (props: TextProps): JSX.Element => {
  return (
    <>
      <div className={`regularText ${props.class}`}>
        {props.text}
      </div>
    </>
  );
};
