import React from "react";

export const BioImage: React.FC = (): JSX.Element => {
  return <img className="bioImage" alt="Jamey" src={require("../../assets/bioImage.png")} />;
};
