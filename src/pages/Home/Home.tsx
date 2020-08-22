import React from "react";
import { BigHeader } from "../../components/BigHeader/BigHeader";
import { SmallHeader } from "../../components/SmallHeader/SmallHeader";

export const Home = () => {
  return (
    <>
      <BigHeader text="Welcome. My name is Jamey." />
      <SmallHeader text="Here's some info about me." />
    </>
  );
};
