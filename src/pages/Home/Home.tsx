import React from "react";
import { BigHeader } from "../../components/BigHeader/BigHeader";
import { SmallHeader } from "../../components/SmallHeader/SmallHeader";
import { BioImage } from "../../components/BioImage/BioImage";
import { BioText } from "../../components/BioText/BioText";

export const Home = () => {
  return (
    <div className="homeContainer">
      <BigHeader text="Welcome. My name is Jamey." />
      <SmallHeader text="Here's some info about me." />
      <BioImage />
      <BioText />
    </div>
  );
};
