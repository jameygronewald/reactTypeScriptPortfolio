import React from "react";
import { SmallHeader } from "../SmallHeader/SmallHeader";
import { RegularText } from "../RegularText/RegularText";
import { IconGridTrackPacker } from "../IconGrids/IconGridTrackPacker";

export const FeaturedProject1 = () => {
  return (
    <>
      <SmallHeader text="TrackPacker" id="trackPackerHeader" />
      <div className="trackPackerImageContainer">
        <img
          alt="trackPacker"
          className="trackPackerImage"
          src={require("../../../src/assets/trackPackerInventory.png")}
        />
      </div>
      <RegularText
        class="trackPackerDesc"
        text="Allows a user to create an “inventory” of all outdoor gear and plan “excursions” by adding inventory items to a packing list for each trip. Here are some of the technologies used to create TrackPacker:"
      />
      <IconGridTrackPacker />
    </>
  );
};
