import React from "react";
import { SmallHeader } from "../SmallHeader/SmallHeader";
import { RegularText } from "../RegularText/RegularText";
import { IconGridBookKeeper } from "../IconGrids/IconGridBookKeeper";

export const FeaturedProject2 = () => {
  return (
    <>
      <SmallHeader text="Book Keeper" id="bookKeeperHeader" />
      <div className="bookKeeperImageContainer">
        <img
          alt="bookKeeper"
          className="bookKeeperImage"
          src={require("../../../src/assets/bookKeeperLibrary.png")}
        />
      </div>
      <RegularText
        class="bookKeeperDesc"
        text="Leverages Google Books API to allow users to search for books and add/delete them to/from a user’s library. Here are some of the technologies I used to build this app:"
      />
      <IconGridBookKeeper />
    </>
  );
};