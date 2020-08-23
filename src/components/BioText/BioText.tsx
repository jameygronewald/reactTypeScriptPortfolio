import React from "react";

export const BioText = (props: {text: string}) => {
  return (
    <>
      <div className="bioText">
        {props.text}
      </div>
    </>
  );
};
