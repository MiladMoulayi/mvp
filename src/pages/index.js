import JokeForm from "@/components/jokes/joke-form";
import "dotenv/config";
import { Fragment, useRef, useState } from "react";

function HomePage() {
  return (
    <Fragment>
      <h1>Home Page</h1>
      <JokeForm />;
    </Fragment>
  );
}

export default HomePage;
