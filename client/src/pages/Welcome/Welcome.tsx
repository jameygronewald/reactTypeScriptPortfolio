import React from "react";
import { BigHeader } from "../../components/BigHeader/BigHeader";
import { BioImage } from "../../components/BioImage/BioImage";
import { RegularText } from "../../components/RegularText/RegularText";
import { IconGridMERN } from "../../components/IconGrids/IconGridMERN";
import { IconGridTools } from "../../components/IconGrids/IconGridTools";

export const Welcome: React.FC = () => {
  return (
    <div className="welcomeContainer">
      <BigHeader class="welcomeHeader" text="Welcome. My name is Jamey." />
      <BioImage />
      <RegularText
        class="bioText1"
        text="I am a full-stack web developer that primarily works creating MERN stack
        applications."
      />
      <IconGridMERN />
      <RegularText
        class="bioText2"
        text="However, I love adding new tools to my toolbelt. Here are a few others I particularly enjoy:"
      />
      <IconGridTools />
    </div>
  );
};
