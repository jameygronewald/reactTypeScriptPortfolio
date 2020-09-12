import React from "react";
import { TextProps } from "../../utils/interfaces";

export const RegularText = (props: TextProps) => {
  return (
    <>
      <div className={`regularText ${props.class}`}>
        {props.text}
      </div>
    </>
  );
};
