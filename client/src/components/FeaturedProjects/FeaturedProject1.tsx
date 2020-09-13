import React from "react";
import { SmallHeader } from "../SmallHeader/SmallHeader";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { RegularText } from "../RegularText/RegularText";
import { IconGridTrackPacker } from "../IconGrids/IconGridTrackPacker";

export const FeaturedProject1: React.FC = (): JSX.Element => {
  return (
    <>
      <SmallHeader text="TrackPacker" class="trackPackerHeader" />
      <ButtonLink
        id="repoButton1"
        buttonText="Github Repo"
        URL="https://github.com/jameygronewald/trackPacker"
        iconHTML=""
      />
      <div className="trackPackerImageContainer">
        <img
          alt="trackPacker"
          className="trackPackerImage"
          src={require("../../../src/assets/trackPackerInventory.png")}
        />
      </div>
      <ButtonLink
        id="deployedButton1"
        buttonText="Deployed Site"
        URL="https://trackpacker.herokuapp.com/"
        iconHTML=""
      />
      <RegularText
        class="trackPackerDesc"
        text="Allows a user to create an “inventory” of all outdoor gear and plan “excursions” by adding inventory items to a packing list for each trip. Here are some of the technologies used to create TrackPacker:"
      />
      <IconGridTrackPacker />
    </>
  );
};
