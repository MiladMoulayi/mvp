import { Fragment, useState } from "react";
import Button from "../ui/button";
import classes from "./joke-card.module.css";

function JokeCard({ setup, punchline }) {
  const [punchlineRevealed, setPunchlineRevealed] = useState(false);

  return (
    <li className={classes.item}>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>Joke Title</h2>
          {setup}
        </div>
        {punchline && punchlineRevealed}
        <Button onClick={() => setPunchlineRevealed(true)}>
          {" "}
          Reveal Punchline
        </Button>
      </div>
    </li>
  );
}

export default JokeCard;
