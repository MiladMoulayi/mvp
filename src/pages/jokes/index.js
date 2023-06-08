import { Fragment, useState } from "react";
import { buildJokesPath, extractJokes } from "../api/jokes";

function JokesPage(props) {
  const [jokeData, setJokeData] = useState();
  function loadJokeHandler(id) {
    fetch(`/api/jokes/${id}`)
      .then((response) => response.json())
      .then((data) => setJokeData(data.joke));
  }

  return (
    <Fragment>
      {jokeData && <p>{jokeData.punchline}</p>}
      <ul>
        {props.jokes.map((joke) => (
          <li key={joke.id}>
            {joke.setup}
            <button onClick={loadJokeHandler.bind(null, joke.id)}>
              Show punchline
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default JokesPage;
