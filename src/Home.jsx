import React from "react";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="welcome to Home page"
        imgsrc="https://loremflickr.com/640/360"
        btname="get started"
        visit="/about"
      />
    </>
  );
};

export default Home;
