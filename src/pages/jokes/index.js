import { Fragment, useState } from "react";
import { buildJokesPath, extractJokes } from "../api/jokes";

function JokesPage(props) {
  const [jokeData, setJokeData] = useState();
  function loadJokeHandler(id) {
    fetch(`/api/${id}`)
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

export async function getStaticProps() {
  const filePath = buildJokesPath();
  const data = extractJokes(filePath);
  return {
    props: {
      jokes: data,
    },
  };
}

export default JokesPage;
