import JokeCard from "./joke-card";
import classes from "./joke-list.module.css";

function JokesList({ jokes }) {
  return (
    <ul className={classes.list}>
      {jokes.map((joke) => (
        <JokeCard key={joke.id} setup={joke.setup} punchline={joke.punchline} />
      ))}
    </ul>
  );
}

export default JokesList;
