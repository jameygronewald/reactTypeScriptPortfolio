import React from "react";

export const RegularText = (props: {class: string, text: string}) => {
  return (
    <>
      <div className={props.class}>
        {props.text}
      </div>
    </>
  );
};
