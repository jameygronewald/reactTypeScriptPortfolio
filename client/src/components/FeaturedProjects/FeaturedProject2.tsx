import React from "react";
import { SmallHeader } from "../SmallHeader/SmallHeader";
import { RegularText } from "../RegularText/RegularText";
import { IconGridBookKeeper } from "../IconGrids/IconGridBookKeeper";
import { ButtonLink } from "../ButtonLink/ButtonLink";

export const FeaturedProject2 = () => {
  return (
    <>
      <SmallHeader text="Book Keeper" id="bookKeeperHeader" />
      <ButtonLink id="repoButton2" buttonText="Github Repo" URL="https://github.com/jameygronewald/bookKeeper"/>
      <div className="bookKeeperImageContainer">
        <img
          alt="bookKeeper"
          className="bookKeeperImage"
          src={require("../../../src/assets/bookKeeperLibrary.png")}
        />
      </div>
      <ButtonLink id="deployedButton2" buttonText="Deployed Site" URL="https://bookkeeperlibrary.herokuapp.com/"/>
      <RegularText
        class="bookKeeperDesc"
        text="Leverages Google Books API to allow users to search for books and add/delete them to/from a user’s library. Here are some of the technologies I used to build this app:"
      />
      <IconGridBookKeeper />
    </>
  );
};